import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import ScrollToTopButton from "./Component/ScrollToTopButton/ScrollToTopButton";
import SignIn_SignUp from "./Pages/Sign_In-Sign_UP-Page/SignIn_SignUp";
import UserCart from "./Pages/UserCartPage/UserCart";
import Page_Not_Found from "./Pages/PageNotFound/404_Page";
function App() {
  return (
    <div className="App">
      <ScrollToTopButton />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/signIn" exact component={SignIn_SignUp} />
        <Route path="/userCart" exact component={UserCart} />
        <Route path="*" component={Page_Not_Found} />
      </Switch>
    </div>
  );
}

export default App;
