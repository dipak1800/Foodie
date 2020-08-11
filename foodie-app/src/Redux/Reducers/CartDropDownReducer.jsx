import CartDropDownInitialState from "./Initialstate/CartDropDownInitialState";
import SHOW_CART_DROPDOWN, {
  ADD_ITEM_TO_CART,
} from "../Actions/ActionConstants/CartDropDownActionConstant";

const CartDropDownReducer = (state = CartDropDownInitialState, action) => {
  switch (action.type) {
    case SHOW_CART_DROPDOWN:
      return {
        ...state,
        ShowCartDropDown: !state.ShowCartDropDown,
      };
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        CartItems: [...state.CartItems, action.payload],
      };
    default:
      return state;
  }
};
export default CartDropDownReducer;
