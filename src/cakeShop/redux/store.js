import { createStore } from "redux";
//import cakeReducer from "./cake/cakeReducer";
import rootReducer  from './rootReducer';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(cakeReducer);
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;