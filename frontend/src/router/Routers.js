import {Route, Switch, } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Landingpage from '../components/Landingpage';
import Nav from "../components/Nav"
import "../css/App.css"

const Routers = () => {
    return(
        <>
        <Nav/>
        <Switch>
            <Route path='/' component={Landingpage} exact />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
        </>
    )
}

export default Routers;