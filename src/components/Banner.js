/*
 * The page's banner
*/ 

import React from 'react';

const Banner = () => (
  <div className="banner">
    <img 
      className="banner__logo"
      src={require('../images/freeCodeCamp-icon.png')} 
      alt="freeCodeCamp_logo" 
    />
  </div>
)

export default Banner;