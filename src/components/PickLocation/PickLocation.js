import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { BLACK, LIGHT_GRAY } from "../../../colors";

class PickLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Text>Map preview!</Text>
        </View>

        <View style={styles.button}>
          <Button title="Locate me" onPress={() => alert("Pick Location")} />
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
  }
});

export default PickLocation;
