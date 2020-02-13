import { APPLY_SORTING } from './../constants/action-types';

export function applySorting(sortBy) {
  return { type: APPLY_SORTING, payload: sortBy };
}