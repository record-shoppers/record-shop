import React from "react";
import ReactDOM from "react-dom";
import Routers from './router/Routers';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Routers />
    </Router>
, document.getElementById("root"));
