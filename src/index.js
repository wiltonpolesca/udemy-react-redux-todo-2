import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
// import * as serviceWorker from './serviceWorker';

//Redux configurations
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import promisse from  'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

import rootReducer from './main/reducers';

//Enable the chome extension to debug 
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(promisse, multi, thunk)(createStore)(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
