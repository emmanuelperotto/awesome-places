import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePlace } from "../store/actions";

class PlaceDetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={this.props.selectedPlace.image}
            style={styles.placeImage}
          />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={this.props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="md-trash" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };
}

PlaceDetailScreen.propTypes = {
  selectedPlace: PropTypes.shape({
    key: PropTypes.number,
    image: PropTypes.object,
    name: PropTypes.string
  }),
  onItemDeleted: PropTypes.func,
  onDeletePlace: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 300
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => {
      dispatch(deletePlace(key));
    }
  };
};

export default connect(null, mapDispatchToProps)(PlaceDetailScreen);
