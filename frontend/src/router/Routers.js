import {Route, Switch, } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Landingpage from '../components/Landingpage';
import Nav from "../components/Nav"
import "../css/App.css"
import { BrowserRouter as Router } from 'react-router-dom';


const Routers = () => {
    return(
        <Router>
            <Nav/>
            <Switch>
                <Route path='/' component={Landingpage} exact />
                {/* <Route path='/dashboard' component={Dashboard} /> */}
            </Switch>
        </Router>
    )
}

export default Routers;