import { Navigation } from "react-native-navigation";
import AuthScreen from "./AuthScreen";
import SharePlaceScreen from "./SharePlaceScreen";
import FindPlaceScreen from "./FindPlaceScreen";
import configureStore from "../store/store";
import { Provider } from "react-redux";

export function registerScreens() {
  const store = configureStore();

  Navigation.registerComponent(
    "courseproject.AuthScreen",
    () => AuthScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    "courseproject.SharePlaceScreen",
    () => SharePlaceScreen,
    store,
    Provider
  );
  Navigation.registerComponent(
    "courseproject.FindPlaceScreen",
    () => FindPlaceScreen,
    store,
    Provider
  );
}
