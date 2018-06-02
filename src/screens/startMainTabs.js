import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource("md-map", 30),
    Icon.getImageSource("md-share-alt", 30),
    Icon.getImageSource("md-menu", 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "courseproject.FindPlaceScreen",
          label: "Find place",
          title: "Find place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                title: "SideDrawer",
                id: "sideDrawerToggle",
                icon: sources[2]
              }
            ]
          }
        },
        {
          screen: "courseproject.SharePlaceScreen",
          label: "Share place",
          title: "Share place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                title: "SideDrawer",
                id: "sideDrawerToggle",
                icon: sources[2]
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "courseproject.SideDrawer"
        }
      }
    });
  });
};

export default startTabs;
