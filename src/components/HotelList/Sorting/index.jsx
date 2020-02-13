import React from 'react';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SortItem from './SortItem';
import { applySorting } from './../../../actions/sorting';

const items = [
  {
    type: 'alphabetically',
    hasSortByLabel: false,
    icon: 'fa-sort-alpha-down'
  },
  {
    type: 'price',
    icon: 'fa-pound-sign'
  },
  {
    type: 'star rating',
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