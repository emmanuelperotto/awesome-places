import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { LIGHT_GRAY } from "../../../colors";
import PropTypes from "prop-types";

const DefaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: LIGHT_GRAY,
    padding: 5,
    margin: 8
  }
});

DefaultInput.propTypes = {
  style: PropTypes.number
};

export default DefaultInput;
