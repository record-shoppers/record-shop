import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import Landingpage from "../components/Landingpage";
import Nav from "../components/Nav";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { UserProfile } from "../components/UserProfile";
import { NotFound404 } from "../components/NotFound404";
import { PrivateRoute } from "../components/PrivateRoute";
import "../css/App.css";
import { Basket } from "../components/Basket";

const Routers = () => {
  const loggedin = useSelector((state) => state.loginReducer.loggedin);
  return (
    <Router>
      <Nav />
      <Switch>
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/userprofile" component={UserProfile} />
        <PrivateRoute path="/basket" component={Basket} />
        <Route path="/" exact component={Landingpage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default Routers;
