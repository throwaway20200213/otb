import React from 'react';
import { useSelector } from 'react-redux';

import HotelListItem from './HotelListItem';

const List = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <div>
      {hotels.map(hotel => (
        <HotelListItem key={hotel.name} {...hotel} />
      ))}
    </div>
  )
}


export default List;