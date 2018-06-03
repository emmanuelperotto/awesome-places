import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const HeadingText = props => (
  <Text {...props} style={[styles.textHeading, props.style]}>
    {props.children}
  </Text>
);

HeadingText.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object
};

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 28,
    fontWeight: "bold"
  }
});

export default HeadingText;
