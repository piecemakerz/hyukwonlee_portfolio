import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "../Routes/Home";

export default () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/hyukwonlee_portfolio" exact>
            <Home />
          </Route>
          <Redirect from="*" to="/hyukwonlee_portfolio" />
        </Switch>
      </>
    </Router>
  );
};
