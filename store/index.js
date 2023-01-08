import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import baseReducer from './reducers';

const middlewares = [thunk];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(baseReducer, composeEnhancers(applyMiddleware(...middlewares)));

export default store;
