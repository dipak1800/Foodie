import React, { useState } from "react";
import Style from "./StripeButton.module.scss";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Swal from "@sweetalert/with-react";
import swal from "sweetalert";
import firebase from "../../Firebase/Firebase.utils";
function StripeButton({ totalAmount, currentUser, history }) {
  const StripeTotalAmount = totalAmount * 100;
  const StripePublishKey =
    "pk_test_51HEe4zJ3nFTaopTruoYaGOhX6L387ZooKVr8KWPeQX0HOcVCvBc6UHemqup7npE7QwS34TGj9vSZ6e0B7H2TysKG00HibMthwl";

  const onPaymentSuccess = token => {
    console.log(token);
    alert("Payment Succesfull");
  };
  const onPaymentClosed = token => {
    if (token) {
      return;
    }
    alert("Transaction Failed");
  };

  const handlePayments = e => {
    e.preventDefault();
    if (!currentUser) {
      history.push("/signIn");
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className={Style.StripeButton}>
      {currentUser /*&& isDeliveryAddressProvided */ ? (
        <StripeCheckout
          className={Style.stripe_button}
          label="Go for Payment"
          name="_Food4Foodie_"
          billingAddress
          shippingAddress
          allowRememberMe
          image="https://svgshare.com/i/Nbd.svg"
          description={`You will have to pay ${totalAmount} rupees`}
          amount={StripeTotalAmount}
          panelLabel="Pay Now"
          token={onPaymentSuccess}
          stripeKey={StripePublishKey}
          currency="INR"
          closed={onPaymentClosed}
        />
      ) : (
        <button
          onClick={handlePayments}
          className={Style.duplicateStripeButton}
        >
          Go for Payment
        </button>
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.CurrentUserReducer.currentUser,
  };
};
export default withRouter(connect(mapStateToProps)(StripeButton));
