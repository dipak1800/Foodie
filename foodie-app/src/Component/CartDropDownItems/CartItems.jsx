import React from "react";
import Style from "./CartItems.module.scss";
function CartItems({ item }) {
  return (
    <div className={Style.CartDropDownItems}>
      <img src={item.imageUrl} alt="selected-item" />
      <div className={Style.ItemsDetails}>
        <span className={Style.ItemName}>{item.name}</span>
        <span className={Style.ItemQuantity}>{item.price} x 1</span>
      </div>
    </div>
  );
}

export default CartItems;
