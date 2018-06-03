import React, { Component } from "react";
import { View, Button, StyleSheet, ImageBackground } from "react-native";

import startMainTabs from "./startMainTabs";
import DefaultInput from "../components/UI/DefaultInput";
import { LIGHT_GRAY, DARK_GRAY, LIGHT_BLUE } from "../../colors";
import HeadingText from "../components/UI/HeadingText";
import MainText from "../components/UI/MainText";
import backgroundImage from "../assets/background.jpg";
import ButtonWithBackground from "../components/UI/ButtonWithBackground";

class AuthScreen extends Component {
  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please log in</HeadingText>
          </MainText>

          <ButtonWithBackground color={LIGHT_BLUE} onPress={() => alert("hey")}>
            Switch to Login
          </ButtonWithBackground>

          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your e-mail address"
              style={styles.input}
            />
            <DefaultInput placeholder="Password" style={styles.input} />
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>

          <ButtonWithBackground color={LIGHT_BLUE} onPress={this.loginHandler}>
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
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
  backgroundImage: {
    flex: 1,
    width: "100%"
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
