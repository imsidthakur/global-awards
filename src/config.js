const devVersion = "1.0.0";
const stagingVersion = "1.0.0";
const prodVersion = "1.0.0";

let version = "";

if (import.meta.env.REACT_APP_ENV === "development") {
  version = devVersion;
} else if (import.meta.env.REACT_APP_ENV === "staging") {
  version = stagingVersion;
} else if (import.meta.env.REACT_APP_ENV === "production") {
  version = prodVersion;
} else {
  version = devVersion;
}

const config = {
  version: version,
  baseUrl: import.meta.env.VITE_BASE_URL || "/",
};

export default config;
