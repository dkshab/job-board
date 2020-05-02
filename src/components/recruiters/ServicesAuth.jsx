import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import { UserContext } from "../../providers/UserProvider";
import Services from "./Services";

const ServicesAuth = () => {
  const user = useContext(UserContext);

  let isRecruiter = false;
  if (user) {
    isRecruiter = user.roles === "recruiter" ? true : false;
  }

  return <>{isRecruiter ? <Services /> : <Redirect to={ROUTES.HOME} />}</>;
};

export default ServicesAuth;
