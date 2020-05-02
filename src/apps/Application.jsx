import React, { useContext, Suspense } from "react";

import { UserContext } from "../providers/UserProvider";

import "../sass/styles.scss";

import Spinner from "../components/Spinner";

const AuthenticatedApp = React.lazy(() => import("./AuthApp/AuthApp"));
const NonAuthenticatedApp = React.lazy(() => import("./NonAuthApp/NonAuthApp"));
// const RecruiterApplication = React.lazy(() =>
//   import("./RecruiterApp/RecruiterApp")
// );

function Application() {
  const user = useContext(UserContext);
  // let isRecruiter = null;
  // if (user) {
  //   isRecruiter = user.roles === "recruiter" ? true : false;
  // }

  return (
    <>
      <Suspense fallback={<Spinner />}>
        {user ? <AuthenticatedApp /> : <NonAuthenticatedApp />}
      </Suspense>
    </>
  );
}

export default Application;
