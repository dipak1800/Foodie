import React from "react";
import Style from "./Navbar.module.scss";
import Logo from "../../Assets/Images/Logo.jpg";
import { NavLink } from "react-router-dom";
import { auth } from "../../Firebase/Firebase.utils";
import swal from "sweetalert";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";
function Navbar({ currentUser }) {
  let handleSignOut = e => {
    swal({
      title: `Hey ${
        currentUser.displayName
          ? currentUser.displayName.toUpperCase()
          : currentUser.name.toUpperCase()
      } Are you sure?`,
      text: " Do you Want to Sign Out??",
      icon: "warning",
      buttons: ["Oh noez!", "yup!"],
      dangerMode: true,
    }).then(willDelete => {
      if (willDelete) {
        auth.signOut();
      } else {
        return;
      }
    });
  };
  return (
    <div className={Style.main_container}>
      <div
        style={{
          display: "flex",
          width: "75%",
          alignItems: "center",
        }}
      >
        <img src={Logo} className={Style.logo} alt="LOGO" />
        <h2 className={Style.logo1}>
          _FOOD 4 FOODIE_
          <p className={Style.tagline}>Faster than you can imagine</p>
        </h2>
      </div>
      <ul className={Style.Navigation_list}>
        <li>
          <NavLink
            to="/"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            <i className="fas fa-house-user">&nbsp;Home</i>
          </NavLink>
        </li>
        {currentUser ? (
          <li onClick={handleSignOut}>
            <i class="fas fa-user-minus">&nbsp;SignOut</i>
          </li>
        ) : (
          <NavLink
            to="/signIn"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            {" "}
            <li>
              <i className="fas fa-user-lock">&nbsp;SignIn</i>
            </li>
          </NavLink>
        )}

        <li>
          <NavLink
            to="/userCart"
            exact
            style={{ textDecoration: "none", color: "black" }}
            activeClassName={Style.activelink}
          >
            <div className={Style.cart_icon}>
              <ShoppingIcon className={Style.shopping_icon} />
              <span className={Style.item_count}>0</span>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
  };
};
export default connect(mapStateToProps)(Navbar);
