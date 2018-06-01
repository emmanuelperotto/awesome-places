import React from "react";
import { StyleSheet, FlatList } from "react-native";
import PropTypes from "prop-types";

import ListItem from "../ListItem/ListItem";

const PlaceList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      keyExtractor={item => item.key.toString()}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

PlaceList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
  onItemSelected: PropTypes.func
};

export default PlaceList;
