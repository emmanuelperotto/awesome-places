import React, { Component } from "react";
import DefaultInput from "../UI/DefaultInput";
import PropTypes from "prop-types";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <DefaultInput
        placeholder="Place name"
        value={this.state.placeName}
        onChangeText={this.placeNameChangedHandler}
      />
    );
  }
}

PlaceInput.propTypes = {
  onPlaceAdded: PropTypes.func
};

export default PlaceInput;
