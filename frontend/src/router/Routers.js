import {Route, Switch, } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Landingpage from '../components/Landingpage';
import Nav from "../components/Nav";
import {Login} from "../components/Login";

const Routers = () => {
    return(
        <>
        <Nav/>
        <Switch>
            <Route path='/' component={Landingpage} exact />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
        </>
    )
}

export default Routers;