import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { Home } from "./public";

const PublicRoutes = () => (
  <Fragment>
    <Route exact path="/" component={Home} />
  </Fragment>
);

export default PublicRoutes;
