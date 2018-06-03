import React from "react";
import { Text, StyleSheet } from "react-native";
import { BLACK, TRANSPARENT } from "../../../colors";
import PropTypes from "prop-types";

const MainText = props => (
  <Text {...props} style={styles.mainText}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  mainText: {
    color: BLACK,
    backgroundColor: TRANSPARENT
  }
});

MainText.propTypes = {
  children: PropTypes.element
};

export default MainText;
