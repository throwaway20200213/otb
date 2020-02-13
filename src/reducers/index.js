import { APPLY_SORTING } from './../constants/action-types';

const initialState = {
  sortBy: "alphabetically",
  hotels: []
};

export default function (state = initialState, action) {
  if (action.type === APPLY_SORTING) {
    return {
      ...state,
      sortBy: action.payload
    };
  }

  return state;
}