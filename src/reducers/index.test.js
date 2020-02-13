import reducer from './';
import { SORT_TYPES } from './../constants/filters';
import { applySorting } from './../actions/sorting';
import { sortBy } from 'lodash.sortby';

const hotels = [
  {
    name: "one",
    price: 100,
    starRating: 3
  },
  {
    name: "two",
    price: 20,
    starRating: 2
  },
  {
    name: "three",
    price: 5000,
    starRating: 5
  },
];

const initialState = {
  sortBy: SORT_TYPES.ALPHABETICAL,
  hotels
};

it('sorts alphabetically', () => {
  const action = applySorting(SORT_TYPES.ALPHABETICAL);
  const newOrder = reducer(initialState, action);

  expect(newOrder.hotels.map(h => h.name)).toEqual([
    "one", "three", "two"
  ]);
});

it('sorts by price', () => {
  const action = applySorting(SORT_TYPES.PRICE);
  const newOrder = reducer(initialState, action);

  expect(newOrder.hotels.map(h => h.name)).toEqual([
    "three", "one", "two"
  ]);
});

it('sorts by star rating', () => {
  const action = applySorting(SORT_TYPES.STAR_RATING);
  const newOrder = reducer(initialState, action);

  expect(newOrder.hotels.map(h => h.name)).toEqual([
    "three", "one", "two"
  ]);
});

