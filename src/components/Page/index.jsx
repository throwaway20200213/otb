import React from 'react';
import './page.css';

const Page = ({ background, children }) => (
  <div className="Page container-fluid" style={{ backgroundImage: `url(${background})` }}>
    {children}
  </div>
);

export default Page;
