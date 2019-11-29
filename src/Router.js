import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bundle from "./components/Bundle";

const Cover = props => <Bundle load={() => import("./page/cover")}>{Cover => <Cover {...props} />}</Bundle>;
const Launch = props => <Bundle load={() => import("./page/launch")}>{Launch => <Launch {...props} />}</Bundle>;
const Report = props => <Bundle load={() => import("./page/index")}>{Report => <Report {...props} />}</Bundle>;

const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/cover" component={Cover} />
      <Route exact path="/launch" component={Launch} />
      <Route exact path="/report" component={Report} />

      <Route exact path="/" component={Cover} />
      <Route exact component={Cover} />
    </Switch>
  </BrowserRouter>
);

export default BasicRoute;
