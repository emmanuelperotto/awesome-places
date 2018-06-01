import React, { Component } from "react";
import { View, Text } from "react-native";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace } from "../store/actions";

class SharePlaceScreen extends Component {
  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
