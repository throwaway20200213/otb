import React from 'react';

import Filters from './Filters';
import List from './List';

const HotelList = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Filters/>
      </div>
      <div className="col-8">
        <List/>
      </div>
    </div>
  )
}


export default HotelList;