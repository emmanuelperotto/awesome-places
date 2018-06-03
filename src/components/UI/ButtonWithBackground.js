import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { BLACK } from "../../../colors";

const ButtonWithBackground = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={[styles.button, { backgroundColor: props.color }]}>
      <Text>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: BLACK
  }
});

ButtonWithBackground.propTypes = {
  children: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string
};

export default ButtonWithBackground;
