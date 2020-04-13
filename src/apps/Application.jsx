import React, { useContext, Suspense } from "react";
import { Route } from "react-router-dom";

import { UserContext } from "../providers/UserProvider";

import "../sass/styles.scss";

import Spinner from "../components/Spinner";

const AuthenticatedApp = React.lazy(() => import("./AuthApp/AuthApp"));
const NonAuthenticatedApp = React.lazy(() => import("./NonAuthApp/NonAuthApp"));

function Application() {
  const user = useContext(UserContext);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        {user ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
      </Suspense>
    </>
  );
}

export default Application;
