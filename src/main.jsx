import { AuthProvider } from "@context/AuthContext.jsx";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import ThemeLoader from "./components/theme-loader/ThemeLoader.jsx";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeLoader>
      <BrowserRouter basename="/">
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ThemeLoader>
  </Provider>,
);
