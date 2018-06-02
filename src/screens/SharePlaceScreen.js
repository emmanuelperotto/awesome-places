import React, { Component } from "react";
import { View } from "react-native";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import { connect } from "react-redux";
import { addPlace } from "../store/actions";
import PropTypes from "prop-types";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }

  onNavigatorEvent = event => {
    switch (event.type) {
      case "NavBarButtonPress":
        if (event.id === "sideDrawerToggle") {
          this.props.navigator.toggleDrawer({
            side: "left"
          });
        }
        break;

      default:
        break;
    }
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };
}

SharePlaceScreen.propTypes = {
  onAddPlace: PropTypes.func
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
