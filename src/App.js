import React from 'react';
import background from './assets/image/background.png';

import Page from './components/Page';
import HotelList from './components/HotelList';


function App() {
  return (
    <Page background={background}>
      <HotelList />
    </Page>
  );
}

export default App;
