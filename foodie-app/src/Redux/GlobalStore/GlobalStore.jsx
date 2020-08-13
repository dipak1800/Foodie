import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import UserQueryReducer from "../Reducers/UserQueryReducer";
import CurrentUserReducer from "../Reducers/CurrentUserReducer";
import CartDropDownReducer from "../Reducers/CartDropDownReducer";
import UserDetailsReducer from "../Reducers/UserDetailsReducer";
let AllReducers = combineReducers({
  UserQueryReducer,
  CurrentUserReducer,
  CartDropDownReducer,
  UserDetailsReducer,
});

let ApplicationStore = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(logger))
);
export default ApplicationStore;
