import React from "react";
import Style from "./CheckOutItems.module.scss";
function CheckOutItems({ item }) {
  return (
    <div className={Style.Checkout_Item}>
      <div className={Style.imageContainer}>
        <img src={item.imageUrl} alt="ordered-item" />
      </div>
      <span className={Style.name}>{item.name}</span>

      <span className={Style.quantity}>
        <div className={Style.add}>
          <i
            style={{ fontSize: "16px", color: "red" }}
            className="fas fa-minus"
          ></i>
        </div>
        <span className={Style.value}>{item.id}</span>
        <div className={Style.remove}>
          <i
            style={{ fontSize: "16px", color: "green" }}
            className="fas fa-plus"
          ></i>
        </div>
      </span>
      <span className={Style.price}>{item.price}</span>
      <div className={Style.remove}>
        <i className="far fa-trash-alt"></i>
      </div>
    </div>
  );
}

export default CheckOutItems;
