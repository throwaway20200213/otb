import React from 'react';

import Icon from '../../../Common/Icon';
import './sort.css';

const SortItem = ({ type, isActive, hasSortByLabel, icon, onClick = () => {} }) => (
  <li className={`list-group-item sort-item  ${isActive && 'active'}`} onClick={() => onClick(type)}>
    {`sort ${hasSortByLabel !== false ? 'by' : ''}`} <span className='font-weight-bold'>{type}</span>
    {icon && <div className={`float-right ${!isActive && 'text-muted'}`}><Icon icon={icon} /></div>}
  </li>
)

export default SortItem;