import {
  fetchRestaurantDetailsSuccess,
  fetchRestaurantDetails,
} from "../Actions/ActionConstants/RestaurantDetailsActionConstants";
import RestaurantDetailsInitialState from "../Reducers/Initialstate/RestaurantDetailsInitialState";

const RestaurantDetailsReducer = (
  state = RestaurantDetailsInitialState,
  action
) => {
  switch (action.type) {
    case fetchRestaurantDetails:
      return {
        ...state,
        loading: true,
        RestaurantDetails: [],
      };
    case fetchRestaurantDetailsSuccess:
      return {
        loading: false,
        RestaurantDetails: action.payload,
      };
    default:
      return state;
  }
};
export default RestaurantDetailsReducer;
