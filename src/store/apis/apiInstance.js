import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { deleteAllCookies, getCookie, setCookie } from "@utils/commonFunctions";

import config from "../../config";

const refreshQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
  prepareHeaders: (headers) => {
    const token = getCookie("refresh")
      ? JSON.parse(getCookie("refresh"))
      : false;
    if (token) {
      headers.set("x-refresh-token", token);
    }
    return headers;
  },
});
const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl,
  prepareHeaders: (headers) => {
    // const token = getState();
    const token = getCookie("token") ? JSON.parse(getCookie("token")) : false;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("x-access-token", token);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (
    result.error &&
    result.error.status === 401 &&
    !window.location.pathname.includes("/sign-in")
  ) {
    const token = getCookie("refresh")
      ? JSON.parse(getCookie("refresh"))
      : false;
    if (token) {
      const { data: refreshResult } = await refreshQuery(
        "/auth/refresh-token",
        api,
        extraOptions,
      );
      if (
        refreshResult?.status === 200 &&
        refreshResult?.data &&
        refreshResult?.data?.token &&
        refreshResult?.data?.refToken
      ) {
        setCookie("token", refreshResult.data.token);
        setCookie("refresh", refreshResult.data.refToken);
        return await baseQuery(args, api, extraOptions);
      }
    }
    deleteAllCookies();
    api.dispatch({ type: "logout" });
    window.location = "/sign-in";
  }
  if (result.error && result.error.status === 403) {
    console.error("You don not have permission to access", result.error);
    // window.history.pushState('', '', '/dashboard');
  }
  return result;
};
// initialize an empty api service that we'll inject endpoints into later as needed
export const apiInstance = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});

export const defaultTransformErrorResponse = (res) => {
  console.log("res", res);
  return res?.data?.message?.data;
};
export const defaultTransformResponse = (res) => {
  return res;
};
