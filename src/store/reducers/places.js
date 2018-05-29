import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE
} from "../actions/actionTypes";

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(), // not unique!! only for Demonstration
          name: payload.placeName,
          image: {
            uri:
              "https://1dib1q3k1s3e11a5av3bhlnb-wpengine.netdna-ssl.com/wp-content/uploads/2013/04/mosel-valley-de-uai-516x387.jpg"
          }
        })
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(
          place => place.key !== state.selectedPlace.key
        ),
        selectedPlace: null
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(
          place => place.key === payload.placeKey
        )
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      };
    default:
      return state;
  }
};

export default reducer;
