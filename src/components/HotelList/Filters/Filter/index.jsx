import React from 'react';

import Icon from '../../../Common/Icon';

const Filter = ({ type, isActive, hasSortByLabel, icon }) => (
  <li className={`list-group-item  ${isActive && 'active'}`}>
    {`sort ${hasSortByLabel !== false ? 'by' : ''}`} <span className='font-weight-bold'>{type}</span>
    {icon && <div className={`float-right ${!isActive && 'text-muted'}`}><Icon icon={icon} /></div>}
  </li>
)

export default Filter;