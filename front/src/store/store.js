import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducres/index';

export default createStore(reducer, compose(applyMiddleware(createLogger(), thunkMiddleware)));