import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

const PlaceDetailScreen = props => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={props.onItemDeleted}>
          <View style={styles.deleteButton}>
            <Icon size={30} name="md-trash" color="red" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

PlaceDetailScreen.propTypes = {
  selectedPlace: PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string
  }),
  onItemDeleted: PropTypes.func
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

export default PlaceDetailScreen;
