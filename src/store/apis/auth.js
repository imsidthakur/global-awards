import {
  apiInstance,
  defaultTransformErrorResponse,
  defaultTransformResponse,
} from "./apiInstance";

const extendedApi = apiInstance.injectEndpoints({
  endpoints: (build) => ({
    signIn: build.mutation({
      query(body) {
        return {
          url: "/auth/signin",
          method: "POST",
          body,
        };
      },
      transformErrorResponse: defaultTransformErrorResponse,
      transformResponse: defaultTransformResponse,
    }),
    signUp: build.mutation({
      query(body) {
        return {
          url: "/auth/signup",
          method: "POST",
          body,
        };
      },
      transformErrorResponse: defaultTransformErrorResponse,
      transformResponse: defaultTransformResponse,
    }),
    forgotPassword: build.mutation({
      query(body) {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body,
        };
      },
      transformErrorResponse: defaultTransformErrorResponse,
      transformResponse: defaultTransformResponse,
    }),
  }),
  overrideExisting: false,
});

export const {
  useSignInMutation,
  useSignUpMutation,
  useForgotPasswordMutation,
} = extendedApi;
