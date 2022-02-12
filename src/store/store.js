import { createStore } from 'redux';
import bugReducer from '../reducers/bugReducer';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

const store = createStore(bugReducer,  applyMiddleware(logger));

export default store;