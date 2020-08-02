import React, { Component } from "react";
import Style from "./Homepage.module.scss";
import Pic from "../../Assets/Images/food4.jpg";
import Card from "../../Component/Card/Card";

import UserSearchInputBar from "../../Component/UserSearchInputBar/UserSearchInputBar";
import Advertisement from "../../Component/Advertisement/AdverTisement";
import Footer from "../../Component/Footer/Footer";
class Homepage extends Component {
  render() {
    return (
      <>
        <div
          className={Style.maincontainer}
          style={{ backgroundImage: `url(${Pic})` }}
        >
          <br />
          <br />
          <br />

          <Advertisement />
          <div className={Style.InputField}>
            <UserSearchInputBar
              type={"text"}
              placeholder={"Search Restaurants by location..."}
            />

            <h3 style={{ textAlign: "center", marginTop: "60px" }}>
              <i>OR</i>
            </h3>
            <UserSearchInputBar
              type={"text"}
              placeholder={"Search Restaurants by Name..."}
            />
          </div>
        </div>
        <Card />
        <Footer />
      </>
    );
  }
}
export default Homepage;
