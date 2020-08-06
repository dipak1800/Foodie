import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RestaurantDetailsReducer from "../Reducers/RestaurantDetailsReducer";
import UserQueryReducer from "../Reducers/UserQueryReducer";
let AllReducers = combineReducers({
  UserQueryReducer,
  RestaurantDetailsReducer,
});

let ApplicationStore = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default ApplicationStore;
