import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const hotels = useSelector(state => state.hotels);

  return (
    <div>
      {hotels.map(hotel => (
        <div key={hotel.name}>{hotel.name}</div>
      ))}
    </div>
  )
}


export default List;