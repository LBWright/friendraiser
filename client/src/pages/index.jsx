// router

import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import AppRouter from "./AppRouter";
import PublicRouter from "./PublicRouter";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <PublicRouter />
      <AppRouter />
    </Switch>
  </BrowserRouter>
);

export default Router;
