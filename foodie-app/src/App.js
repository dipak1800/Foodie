import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import ScrollToTopButton from "./Component/ScrollToTopButton/ScrollToTopButton";
import CheckOutPage from "./Pages/CheckOutPage/CheckOut";
import Page_Not_Found from "./Pages/PageNotFound/404_Page";
import Sign_In from "./Pages/SignInPage/Sign_In";
import RestaurantsPage from "./Pages/RestaurantsPage/Restaurants";
import SignUpPage from "./Pages/SignUp_Page/SignUpPage";
import UserDetailsPage from "./Pages/UserDetailsPage/UserDetails";
import { connect } from "react-redux";
import setCurrentUser from "./Redux/Actions/ActionsCreator/userAuthActionCreators";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";
function App({ setCurrentUser, currentUser }) {
  let unSunscribeFromAuth = null;
  useEffect(() => {
    //Our application can now listen to authentication state changes
    let unSunscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // setcurrentUser(user);
      // console.log(user);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot);
          // console.log(snapShot.data());

          if (snapShot.data() !== undefined) {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            });
          }
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unSunscribeFromAuth(); //to avoid memory leak so that if the user signs out we will unsubscribe from auth
    };
  }, []);
  return (
    <div className="App">
      <ScrollToTopButton />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/userCart" exact component={CheckOutPage} />
        <Route path="/userQueryRestaurants" exact component={RestaurantsPage} />
        <Route
          path="/signIn"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <Sign_In />)}
        />
        <Route path="/userDetails" exact component={UserDetailsPage} />
        <Route
          path="/signUp"
          exact
          render={() => (currentUser ? <Redirect to="/" /> : <SignUpPage />)}
        />

        <Route path="*" component={Page_Not_Found} />
      </Switch>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: currentuser => dispatch(setCurrentUser(currentuser)),
  };
};
const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
