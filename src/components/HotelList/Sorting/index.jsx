import React from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SortItem from './SortItem';
import { applySorting } from './../../../actions/sorting';
import { SORT_TYPES } from './../../../constants/filters';

const items = [
  {
    type: SORT_TYPES.ALPHABETICAL,
    hasSortByLabel: false,
    icon: 'fa-sort-alpha-down'
  },
  {
    type: SORT_TYPES.PRICE,
    icon: 'fa-pound-sign'
  },
  {
    type: SORT_TYPES.STAR_RATING,
    icon: 'fa-star'
  }
]

const Sorting = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.sortBy);

  const onClick = useCallback((type) => dispatch(applySorting(type)), [dispatch]);

  return (
    <ul className="list-group">
      {items.map(item => (
        <SortItem key={item.type} {...item} isActive={sortBy === item.type} onClick={onClick} />
      ))}
    </ul>
  )
}


export default Sorting;