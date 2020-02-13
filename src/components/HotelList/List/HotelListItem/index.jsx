import React from 'react';

import StarRating from './../../../Common/StarRating';

const HotelListItem = ({ name, price, description, starRating }) => (
  <div className="card mb-2">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6 className="card-subtitle mb-2"></h6>
      <StarRating starRating={starRating} />
      <div className="card-text">
        {description}

        <div>
        <button className="mt-2 btn btn-warning">
          <div className="font-weight-bold">Book Now</div>
          £{(price / 100).toFixed(2)}
        </button>
        </div>
      </div>
    </div>
  </div>
);

export default HotelListItem;