import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import counterReducer from './store/reducers/counter'
import resultReducer from './store/reducers/result'
import {Provider} from 'react-redux'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const logger = store => {
    return next => {
        return action => {
            console.log('Middleware', action);
            const  result = next(action);
            console.log('Middle ware next state', store.getState());
            return result
        }
    }
};
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer,composeEnchancers(applyMiddleware(logger)));



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
