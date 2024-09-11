import LazyComponent from "@components/LazyComponent";
import AuthLayout from "@layouts/AuthLayout";
import NonAuthLayout from "@layouts/NonAuthLayout";
import * as React from "react";
import {
  Navigate,
  matchRoutes,
  useLocation,
  useRoutes,
} from "react-router-dom";

import useAuth from "./hooks/useAuth";

const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const SignIn = React.lazy(() => import("./pages/sign-in/SignIn"));
const SignUp = React.lazy(() => import("./pages/sign-up/SignUp"));
const ForgotPassword = React.lazy(
  () => import("./pages/forgot-password/ForgotPassword"),
);
const authRouts = [
  {
    path: "/dashboard",
    element: Dashboard,
  },
];

const nonAuthRouts = [
  {
    path: "/sign-in",
    element: SignIn,
  },
  {
    path: "/sign-up",
    element: SignUp,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
  },
];

function LayoutWrapper({ nonAuthRouts }) {
  const auth = useAuth();
  const location = useLocation();
  const authenticatedRoute = !matchRoutes(nonAuthRouts, location.pathname);

  if (!auth?.authenticated && authenticatedRoute) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  } else if (auth?.authenticated && !authenticatedRoute) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
  return authenticatedRoute ? <AuthLayout /> : <NonAuthLayout />;
}

export default function AppRouting() {
  const auth = useAuth();

  const routes = React.useMemo(() => {
    const conditionalDefaultRout = (
      <Navigate
        to={auth?.authenticated ? authRouts[0].path : nonAuthRouts[0].path}
      />
    );
    const childrenRoutes = [...authRouts, ...nonAuthRouts].map((route) => {
      return {
        ...route,
        element: <LazyComponent Component={route.element} />,
      };
    });
    return [
      {
        path: "/",
        element: <LayoutWrapper nonAuthRouts={nonAuthRouts} />,
        children: [
          ...childrenRoutes,
          {
            index: true,
            element: conditionalDefaultRout,
          },
        ],
      },
      {
        path: "*",
        element: conditionalDefaultRout,
      },
    ];
  }, [auth?.authenticated]);
  const routing = useRoutes(routes);
  return routing;
}
