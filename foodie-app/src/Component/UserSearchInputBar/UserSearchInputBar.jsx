import Style from "./UserSearchInputBar.module.scss";
import PlacesAutocomplete from "react-places-autocomplete";
import React, { Component } from "react";

export default class UserSearchInputBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { address: "" };
  // }

  // handleChange = address => {
  //   this.setState({ address });
  // };
  render() {
    const { type, placeholder } = this.props;
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

      //   <PlacesAutocomplete
      //     value={this.state.address}
      //     onChange={this.handleChange}
      //     onSelect={this.handleSelect}
      //   >
      //     {({
      //       getInputProps,
      //       suggestions,
      //       getSuggestionItemProps,
      //       loading,
      //     }) => (
      //       <div>
      //         <input
      //           {...getInputProps({
      //             placeholder: "Search Places ...",
      //             className: "location-search-input",
      //           })}
      //         />
      //         <div className="autocomplete-dropdown-container">
      //           {loading && <div>Loading...</div>}
      //           {suggestions.map(suggestion => {
      //             const className = suggestion.active
      //               ? "suggestion-item--active"
      //               : "suggestion-item";
      //             // inline style for demonstration purpose
      //             const style = suggestion.active
      //               ? { backgroundColor: "#fafafa", cursor: "pointer" }
      //               : { backgroundColor: "#ffffff", cursor: "pointer" };
      //             return (
      //               <div
      //                 {...getSuggestionItemProps(suggestion, {
      //                   className,
      //                   style,
      //                 })}
      //               >
      //                 <span>{suggestion.description}</span>
      //               </div>
      //             );
      //           })}
      //         </div>
      //       </div>
      //     )}
      //   </PlacesAutocomplete>
      // </div>
    );
  }
}
