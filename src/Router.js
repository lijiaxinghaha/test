import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bundle from "./Bundle";

const Cover = props => <Bundle load={() => import("./page/cover")}>{Cover => <Cover {...props} />}</Bundle>;

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/cover" component={Cover} />

      <Route exact path="/" component={Cover} />
      <Route exact component={Cover} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
