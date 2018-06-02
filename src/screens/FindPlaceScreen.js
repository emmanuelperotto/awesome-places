import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PlaceList from "../components/PlaceList/PlaceList";
import PropTypes from "prop-types";

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }

  onNavigatorEvent = event => {
    switch (event.type) {
      case "NavBarButtonPress":
        if (event.id === "sideDrawerToggle") {
          this.props.navigator.toggleDrawer({
            side: "left"
          });
        }
        break;

      default:
        break;
    }
  };

  itemSelectedHandler = key => {
    const place = this.props.places.find(place => place.key === key);

    this.props.navigator.push({
      screen: "courseproject.PlaceDetailScreen",
      title: place.name,
      passProps: {
        selectedPlace: place
      }
    });
  };
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

FindPlaceScreen.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(FindPlaceScreen);
