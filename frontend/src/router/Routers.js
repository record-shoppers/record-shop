import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import Landingpage from "../components/Landingpage";
import Nav from "../components/Nav";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import "../css/App.css";

const Routers = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={Landingpage} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
};

export default Routers;
