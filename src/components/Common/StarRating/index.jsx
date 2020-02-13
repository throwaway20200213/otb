import React from 'react';

import Icon from './../Icon';
import './star.css';

const StarRating = ({ starRating }) => {
  const numberOfStars = new Array(starRating).fill(0);
  const Stars = numberOfStars.map((star, i) => <Icon key={i} icon="fa-star" />);

  return (
    <div className="colour-gold">
      {Stars}
    </div>
  );
};

export default StarRating;