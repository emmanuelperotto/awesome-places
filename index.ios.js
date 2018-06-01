import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/screens";

registerScreens();
// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: "courseproject.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Welcome" // title of the screen as appears in the nav bar (optional)
  }
});
