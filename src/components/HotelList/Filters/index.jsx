import React from 'react';

import Filter from './Filter';

const activeFilter = 'alphabetically';

const filters = [
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

const Filters = () => {
  return (
    <ul className="list-group">
      {filters.map(filter => (
        <Filter {...filter} isActive={activeFilter === filter.type} />
      ))}
    </ul>
  )
}


export default Filters;