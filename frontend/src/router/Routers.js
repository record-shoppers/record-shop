import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Landingpage from '../components/Landingpage';

const Routers = () => {
    <Router>
        <Switch>
            <Route path='/' component={Landingpage} exact />
            {/* <Route path='/dashboard' component={Dashboard} /> */}
        </Switch>
    </Router>
}

export default Routers;