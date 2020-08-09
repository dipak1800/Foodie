import React from "react";
import Style from "./CartDropDown.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import toggle_DropDown from "../../Redux/Actions/ActionsCreator/CartDropDownActionCreator";
function CartDropDown({ toggle_DropDown }) {
  return (
    <div className={Style.CartDropDown}>
      <div className={Style.CartItems}></div>
      <Link to="/userCart" style={{ textAlign: "center", marginTop: "30px" }}>
        <button onClick={toggle_DropDown} className={Style.Cartbutton}>
          Go To CheckOut
        </button>
      </Link>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    toggle_DropDown: () => dispatch(toggle_DropDown()),
  };
};
export default connect(null, mapDispatchToProps)(CartDropDown);
