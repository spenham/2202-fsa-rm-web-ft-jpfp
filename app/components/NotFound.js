import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
      <NavLink to="/" activeClassName="selected">
        Go Back to Campuses
      </NavLink>
    </div>
  );
};

export default NotFound;
