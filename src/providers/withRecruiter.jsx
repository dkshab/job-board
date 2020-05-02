import React from "react";

import { UserContext } from "./UserProvider";

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

const withRecruiter = (Component) => {
  const WrappedComponent = (props) => {
    return (
      <UserContext.Consumer>
        {(user) => <Component user={user} {...props} />}
      </UserContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithRecruiter(${getDisplayName(
    WrappedComponent
  )})`;
  return WrappedComponent;
};

export default withRecruiter;
