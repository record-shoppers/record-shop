import Homepage from "../components/LandingPage"
import Nav from "../components/Nav"
import { BrowserRouter as Route, Switch, Router, Link } from 'react-router-dom';

const Routers = () => {
    return(
    <Router>
        <Nav/>
        <Switch>
            <Route path='/' exact component={Homepage}  />
        </Switch>
    </Router>
    )
}

export default Routers;