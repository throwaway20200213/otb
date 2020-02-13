import _sortBy from 'lodash.sortby';

import { APPLY_SORTING } from './../constants/action-types';
import { SORT_TYPES } from './../constants/filters';

const hotels = [{
  id: 1,
  name: 'Iberostar Grand Salome',
  location: 'Costa Adeje, Tenerife',
  starRating: 5,
  price: 113650,
  overview: "This is the first hotel"
},
{
  id: 2,
  name: 'Aguamarina Golf Hotel',
  location: 'Costa Adeje, Tenerife',
  starRating: 3,
  price: 69680,
  overview: "This is the second hotel"
},
{
  id: 3,
  name: 'Las Piramides Resort',
  location: 'Costa Adeje, Tenerife',
  starRating: 4,
  price: 49999,
  overview: "This is the third hotel"
}];

const initialState = {
  sortBy: SORT_TYPES.ALPHABETICAL,
  hotels
};

export default function (state = initialState, action) {
  if (action.type === APPLY_SORTING) {
    const sortHotels = (filter) => {
      const {hotels} = state;
      switch(filter) {
        case SORT_TYPES.ALPHABETICAL:
          return _sortBy(hotels, hotel => hotel.name);

        case SORT_TYPES.PRICE:
          return _sortBy(hotels, hotel => -hotel.price); // negative for descending price

        case SORT_TYPES.STAR_RATING:
          return _sortBy(hotels, hotel => -hotel.starRating);

        default: return hotels;
      }
    }

    const newHotelOrder = sortHotels(action.payload);

    return {
      sortBy: action.payload,
      hotels: newHotelOrder
    };
  }

  return state;
}