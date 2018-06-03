import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

import { connect } from "react-redux";
import { addPlace } from "../store/actions";
import PropTypes from "prop-types";
import { BLACK, LIGHT_GRAY } from "../../colors";
import DefaultInput from "../components/UI/DefaultInput";
import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import previewImage from "../assets/beautiful-place.jpg";

class SharePlaceScreen extends Component {
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
          <View style={styles.placeholder}>
            <Image source={previewImage} style={styles.previewImage} />
          </View>

          <View style={styles.button}>
            <Button title="Pick image" />
          </View>

          <View style={styles.placeholder}>
            <Text>Map preview!</Text>
          </View>

          <View style={styles.button}>
            <Button title="Locate me" />
          </View>

          <DefaultInput placeholder="Place name" />

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
  placeholder: {
    borderWidth: 1,
    borderColor: BLACK,
    backgroundColor: LIGHT_GRAY,
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
