/*
 * Main component that handles all the rendering
*/

import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Campers from './Campers';
import Footer from './Footer';

let apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
export default class CamperLeaderboardApp extends React.Component { 
  state = {
    error: null,
    campers: [],
    recent: undefined
  };
  handleTogglePoints = () => {
    if (this.state.recent) {
      apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
      
    } else {
      apiURL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    }
    this.componentDidMount();
  };
  componentDidMount() {
    fetch(apiURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState((prevState) => ({ 
            campers: result,
            recent: !prevState.recent 
          }));
        },
        (error) => {
          this.setState(() => ({ error }));
        }
      )
  };
  render() {
    return (
      <div>
        <Banner />
        <div className="container">
          <Header />
          <Campers 
            campers={this.state.campers} 
            handleTogglePoints={this.handleTogglePoints}
            isRecent={this.state.recent === true}
          />
        </div>
        <Footer />
      </div>
    )
  };
}