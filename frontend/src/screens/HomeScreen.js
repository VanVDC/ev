import React from 'react';

import Jumbotron from '../components/jumbo/Jumbo';
import HomeProductSection from '../components/homeProductSection/HomeProducts';
import Info from '../components/info-head-screen/Info';
import Meta from '../components/Meta';

const HomeScreen = ({ match, history }) => {
  return (
    <>
      <Meta />
      <Jumbotron />
      <Info />
      <HomeProductSection history={history} />
    </>
  );
};

export default HomeScreen;
