import React from "react";
import ReactDOM from "react-dom";
import Routers from './router/Routers';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
        <Routers />
    </Provider>
    , document.getElementById("root"));
