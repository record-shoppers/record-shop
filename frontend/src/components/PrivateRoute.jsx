import { Redirect, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { authenticateUser } from "../helpers/fetch";

import { authUser } from "../actions/loginAction";

export const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
  const dispatch = useDispatch();

  // grab the info if user is logged in from context
  const [error, setError] = useState({ message: "" });

  // this gets executed BEFORE first render
  const [authIsDone, setAuthIsDone] = useState(false);

  // last thing to get executed (after all components have been rendered already)
  useEffect(() => {
    console.log("Context is trying to authenticate the user");
    const authMe = async () => {
      try {
        // /me/auth
        const result = await authenticateUser();
        console.log("result => ", result);
        if (result.error) {
          setAuthIsDone(true);
          return;
        }
        dispatch(authUser(result));

        setAuthIsDone(true);
      } catch (error) {}
    };

    authMe();
  }, []); // will executed AFTER first render

  const user = useSelector((state) => state.loginReducer.user);

  // in case we are logged in => allow passing the given route
  // in case we are NOT logged in => redirect that fu**** not known person to login
  if (!authIsDone) return <div>Loading...</div>;
  if (authIsDone) {
    return user ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={redirectTo} />
    );
  }
};
