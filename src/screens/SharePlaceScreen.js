import React, { Component } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";

import { connect } from "react-redux";
import { addPlace } from "../store/actions";
import PropTypes from "prop-types";
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import PlaceInput from "../components/PlaceInput/PlaceInput";
import PickImage from "../components/PickImage/PickImage";
import PickLocation from "../components/PickLocation/PickLocation";

class SharePlaceScreen extends Component {
  state = {
    placeName: ""
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText> Share a place with us!</HeadingText>
          </MainText>

          <PickImage />

          <PickLocation />

          <PlaceInput />
          <View style={styles.button}>
            <Button title="Share the place!" />
          </View>
        </View>
      </ScrollView>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  button: {
    margin: 8
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
