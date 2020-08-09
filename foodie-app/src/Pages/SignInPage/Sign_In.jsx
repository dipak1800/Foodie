import React, { useState } from "react";
import Style from "./Sign_In.module.scss";
import Pic from "../../Assets/Images/food.jpg";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";
import { auth, signInWithGoogle } from "../../Firebase/Firebase.utils";
import swal from "sweetalert";
function Sign_In() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let handleSignIn = async e => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);

      swal({
        title: `  WElC😍ME ${email}!`,
        text: "You can now Purchase any Food!",
        icon: "success",
        button: "Aww yiss!",
      });
      setPassword("");
      setEmail("");
    } catch (err) {
      console.log(err.message);
      swal({
        title: `Please check Your Inputs😠!`,
        text: "Either Email or Password is Wrong",
        icon: "warning",
        button: "OK!",
      });
    }
  };
  let handleGoogleSignIn = e => {
    signInWithGoogle();
    swal({
      title: `  WElC😍ME !`,
      text: "You can now Purchase any Food!",
      icon: "success",
      button: "Aww yiss!",
    });
  };
  return (
    <div className={Style.main_container}>
      <div className={Style.sub_container}>
        <div className={Style.branding}>
          <div
            className={Style.showCase}
            style={{ backgroundImage: `url(${Pic})` }}
          >
            <h1>
              _Food<b>4</b>Foodie_
            </h1>
            <h3>Always on Time</h3>
          </div>
        </div>
        <div className={Style.signInForm}>
          <div className={Style.handleForm}>
            <h2 className={Style.Login}>Login</h2>
            <form action="" onSubmit={handleSignIn}>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="E-Mail"
                />
              </div>
              <div>
                <input
                  type="password"
                  name=""
                  id=""
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>
              <div className={Style.handlecheckbox}>
                <div className={Style.checkbokstyling}>
                  <input type="checkbox" name="" id="" />
                  <span> Remember&nbsp;Me</span>
                </div>
                <div>
                  <span className={Style.fogotPassword}>Forgot Password?</span>
                </div>
              </div>
              <div className={Style.buttons}>
                <button className={Style.button1} type="submit">
                  SignIn
                </button>
                <button
                  className={Style.button2}
                  type="button"
                  onClick={handleGoogleSignIn}
                >
                  Google
                </button>
              </div>
            </form>
            <div className={Style.else}>
              ----------------------<b>OR</b>----------------------
            </div>
            <div className={Style.option}>
              Don't Have An Account?
              <span className={Style.routeToSignUp}>
                <Link style={{ color: "blue" }} to="/signUp">
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
  };
};
export default Sign_In;
