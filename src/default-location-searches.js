import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-liptov',
    predictionPlace: {
      address: 'Liptov',
      bounds: new LatLngBounds(new LatLng(49.50710768, 20.14642267), new LatLng(48.66542133, 19.14658133)),
    },
  },
  {
    id: 'default-tatry',
    predictionPlace: {
      address: 'Vysoké Tatry',
      bounds: new LatLngBounds(new LatLng(49.58025143,20.47471541), new LatLng(48.76459178,19.48403741)),
    },
  },
  
  
  
  
];
export default defaultLocations;