export const jwtDecode = (t) => {
  if (t.includes(".")) {
    let token = {};
    token.raw = t;
    token.header = JSON.parse(window.atob(t.split(".")[0]));
    token.payload = JSON.parse(window.atob(t.split(".")[1]));
    return token;
  }
  return t;
};

export const setCookie = (cName, cValue) => {
  if (cValue) {
    const jwtData = jwtDecode(cValue);
    const d = jwtData.payload.exp
      ? new Date(jwtData?.payload?.exp * 1000).toUTCString()
      : new Date(new Date().getTime() + 60 * 60 * 1000).toUTCString();
    const expires = "expires=" + d;
    document.cookie =
      cName + "=" + btoa(JSON.stringify(cValue)) + ";" + expires + ";path=/";
  }
};

export const getCookie = (cName) => {
  const name = cName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0 && name.length !== c.length) {
      return atob(c.substring(name.length, c.length));
    }
  }
  return "";
};

export const deleteCookie = (cName) => {
  document.cookie = cName + "=; Path=/;max-age=0";
};

export const deleteAllCookies = () => {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name);
  }
};
