import React from "react";
import Style from "./Navbar.module.scss";
// import Footer from "../Footer";
import Logo from "../../Assets/Images/Logo.jpg";
function Navbar() {
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
          <i className="fas fa-house-user">&nbsp;Home</i>
        </li>
        <li>
          <i className="fas fa-user-lock">&nbsp;SignIn</i>
        </li>

        <li>
          {" "}
          <i className="fas fa-cart-plus">&nbsp;Cart</i>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
