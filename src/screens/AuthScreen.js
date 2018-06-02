import React, { Component } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import startMainTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import { LIGHT_GRAY, DARK_GRAY } from "../../colors";

class AuthScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Please log in</Text>
        <Button title="Switch to Login" />

        <View style={styles.inputContainer}>
          <DefaultInput
            placeholder="Your e-mail address"
            style={styles.input}
          />
          <DefaultInput placeholder="Password" style={styles.input} />
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>

        <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }

  loginHandler = () => {
    startMainTabs();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: LIGHT_GRAY,
    borderColor: DARK_GRAY
  }
});

export default AuthScreen;
