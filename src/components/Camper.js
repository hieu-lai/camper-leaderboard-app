/*
 * Component for each camper in list
*/

import React from 'react';

const shortURL = 'https://www.freecodecamp.com/';

const Camper = (props) => (
    <tr>
      <td>{props.rank}</td>
      <td>
        <a href={shortURL + props.userName} className="userName">
          <img src={props.idImg} alt='idImg' className="idImg" />
          {props.userName}
        </a>
      </td>
      <td>{props.recentPoints}</td>
      <td>{props.allTimePoints}</td>
    </tr>  
)

export default Camper;