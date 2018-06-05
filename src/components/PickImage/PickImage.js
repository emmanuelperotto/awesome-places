import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import previewImage from "../assets/beautiful-place.jpg";
import { BLACK, LIGHT_GRAY } from "../../../colors";

class PickImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image source={previewImage} style={styles.previewImage} />
        </View>

        <View style={styles.button}>
          <Button title="Pick image" onPress={() => alert("Pick image")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
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

export default PickImage;
