import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Campers from './Campers';

export default class CamperLeaderboardApp extends React.Component {
  
  render() {
    return (
      <div>
        <Banner />
        <Header />
        <Campers />
      </div>
    )
  }
}