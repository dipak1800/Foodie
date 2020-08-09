import CartDropDownInitialState from "./Initialstate/CartDropDownInitialState";
import SHOW_CART_DROPDOWN from "../Actions/ActionConstants/CartDropDownActionConstant";

const CartDropDownReducer = (state = CartDropDownInitialState, action) => {
  switch (action.type) {
    case SHOW_CART_DROPDOWN:
      return {
        ...state,
        ShowCartDropDown: !state.ShowCartDropDown,
      };
    default:
      return state;
  }
};
export default CartDropDownReducer;
