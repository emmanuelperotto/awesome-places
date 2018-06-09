import React from "react";
import DefaultInput from "../UI/DefaultInput";
import PropTypes from "prop-types";

const PlaceInput = props => (
  <DefaultInput
    placeholder="Place name"
    value={props.placeName}
    onChangeText={this.placeNameChangedHandler}
  />
);

PlaceInput.propTypes = {
  onPlaceAdded: PropTypes.func,
  placeName: PropTypes.string
};

export default PlaceInput;
