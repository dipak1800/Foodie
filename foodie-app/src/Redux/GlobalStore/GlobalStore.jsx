import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import UserQueryReducer from "../Reducers/UserQueryReducer";
import CurrentUserReducer from "../Reducers/CurrentUserReducer";
let AllReducers = combineReducers({
  UserQueryReducer,
  CurrentUserReducer,
});

let ApplicationStore = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(logger))
);
export default ApplicationStore;
