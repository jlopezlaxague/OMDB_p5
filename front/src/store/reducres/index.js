import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer'
import loginReducer from "./loginReducer"

export default combineReducers({
  films: filmsReducer,
  loggedUser: loginReducer
});