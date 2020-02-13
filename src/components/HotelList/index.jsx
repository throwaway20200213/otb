import React from 'react';

import Sorting from './Sorting';
import List from './List';

const HotelList = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Sorting/>
      </div>
      <div className="col-8">
        <List/>
      </div>
    </div>
  )
}


export default HotelList;