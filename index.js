import React from "react";
import App from "./App";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./src/store/store";

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent("courseproject", () => ReduxApp);
