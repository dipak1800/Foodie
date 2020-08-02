import React from "react";
import Style from "./UserSearchInputBar.module.scss";
function UserSearchInputBar({ type, placeholder }) {
  return (
    <div className={Style.handleForm}>
      <form className={Style.UserResponse}>
        <input type={type} placeholder={placeholder} required name="search" />
        <button type="sumbit">
          <i
            style={{ fontSize: "18px" }}
            className="fas fa-search-location"
          ></i>
        </button>
      </form>
    </div>
  );
}

export default UserSearchInputBar;
