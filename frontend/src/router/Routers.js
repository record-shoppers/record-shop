import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../components/Dashboard";
import Landingpage from "../components/Landingpage";
import Nav from "../components/Nav";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";
import { UserProfile } from "../components/UserProfile";
import { NotFound404 } from "../components/NotFound404";
import "../css/App.css";

const Routers = () => {
  const loggedin = useSelector((state) => state.loginReducer.loggedin);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Landingpage} />
        {loggedin && <Route path="/dashboard" component={Dashboard} />}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        {loggedin && <Route path="/userprofile" component={UserProfile} />}
        <Route path="*" component={NotFound404} />
      </Switch>
    </Router>
  );
};

export default Routers;
