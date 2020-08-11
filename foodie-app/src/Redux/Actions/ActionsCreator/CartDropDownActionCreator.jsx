import SHOW_CART_DROPDOWN, {
  ADD_ITEM_TO_CART,
} from "../ActionConstants/CartDropDownActionConstant";

const toggle_DropDown = () => {
  return {
    type: SHOW_CART_DROPDOWN,
  };
};

export const add_Item = addedItems => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: addedItems,
  };
};
export default toggle_DropDown;
