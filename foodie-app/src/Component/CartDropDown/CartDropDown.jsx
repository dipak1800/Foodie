import React, { Fragment } from "react";
import Style from "./CartDropDown.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartItems from "../CartDropDownItems/CartItems";
import Pic from "../../Assets/Images/delivery.jpg";
import toggle_DropDown from "../../Redux/Actions/ActionsCreator/CartDropDownActionCreator";
function CartDropDown({ toggle_DropDown }) {
  const SHOP_DATA = [
    {
      id: 1,
      title: "Hats",
      routeName: "hats",
      items: [
        {
          id: 30,
          name: " Biscuits",
          imageUrl: "https://i.ibb.co/71ndGRg/macarons-2548827-1920.jpg",
          price: 325,
        },
        {
          id: 31,
          name: "Hamburger",
          imageUrl: "https://i.ibb.co/gFhnWk8/hamburger-1238246-1920.jpg",
          price: 200,
        },
        {
          id: 32,
          name: "Hot Dog",
          imageUrl: "https://i.ibb.co/WfJYcT6/fast-food-2132863-1920.jpg",
          price: 60,
        },
        {
          id: 33,
          name: "Pav Bhaji",
          imageUrl: "https://i.ibb.co/9NYHf6G/pav-bhaji-371377-1920.jpg",
          price: 50,
        },
        {
          id: 34,
          name: "Gulab Jamun",
          imageUrl: "https://i.ibb.co/kXgPXST/indian-sweet-371357-1920.jpg",
          price: 240,
        },
        {
          id: 35,
          name: "Pizza",
          imageUrl: "https://i.ibb.co/qySHjHc/pizza-3007395-1920.jpg",
          price: 140,
        },
      ],
    },
  ];
  console.log(SHOP_DATA);
  return (
    <div className={Style.CartDropDown}>
      <div className={Style.CartItems}>
        {SHOP_DATA[0].items.length ? (
          SHOP_DATA[0].items.map(item => (
            <Fragment key={item.id}>
              <CartItems item={item} />
            </Fragment>
          ))
        ) : (
          <div
            className={Style.empty_message}
            style={{ backgroundImage: `url(${Pic})` }}
          >
            Your cart is Empty
          </div>
        )}
      </div>
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
