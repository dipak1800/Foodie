import React from "react";
import Style from "./Navbar.module.scss";
function Navbar() {
  return (
    <div className={Style.main_container}>
      <h2 className={Style.logo}>Food4Foodie</h2>

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
