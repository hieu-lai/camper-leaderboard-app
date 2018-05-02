import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Campers from './Campers';

export default class CamperLeaderboardApp extends React.Component { 
  state = {
    error: null,
    campers: []
  };
  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            campers: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  };
  render() {
    return (
      <div>
        {console.log(this.state.campers)}
        <Banner />
        <Header />
        <Campers campers={this.state.campers} />
      </div>
    )
  };
}