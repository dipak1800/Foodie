// import {
//   fetchRestaurantDetailsSuccess,
//   fetchRestaurantDetails,
// } from "../ActionConstants/RestaurantDetailsActionConstants";
// import axios from "axios";
// import { useSelector } from "react-redux";

// // function RestaurantDetailsActionCreators() {
// //   var query = useSelector(state => state.UserQueryReducer.locationName);
// // }

// const fetchRestaurantData = () => {
//   return {
//     type: fetchRestaurantDetails,
//   };
// };

// const fetchRestaurantDataSuccess = data => {
//   return {
//     type: fetchRestaurantDetailsSuccess,
//     payload: data,
//   };
// };
// const headers = {
//   "Content-Type": "application/json",
//   "user-key": "0997dc3e6fb7b32390fe637998593e5b",
// };
// const Zurl = `https://developers.zomato.com/api/v2.1/locations?query=${"Kolhapur"}`;

// const getRestaurantDetails = () => {
//   return dispatch => {
//     dispatch(fetchRestaurantData);
//     axios
//       .get(Zurl, { headers: headers })
//       .then(response => {
//         let details = response.data;
//         dispatch(fetchRestaurantDataSuccess(details));
//       })
//       .catch(err => {
//         alert("something went wrong", err.message);
//       });
//   };
// };
// export default getRestaurantDetails;
