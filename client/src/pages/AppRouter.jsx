import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import {
  Dashboard,
  Login,
  Meetings,
  Profile,
  Register,
  Support,
  Supporters,
  Tasks
} from "./app";

const AppRoutes = () => (
  <Fragment>
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/meetings" component={Meetings} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/support" component={Support} />
    <Route exact path="/supporters" component={Supporters} />
    <Route exact path="/tasks" component={Tasks} />
  </Fragment>
);

export default AppRoutes;
