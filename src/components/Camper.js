import React from 'react';

const shortURL = 'https://www.freecodecamp.com/';

const Camper = (props) => (
    <tr>
      <td>{props.rank}</td>
      <td>
        <a href={shortURL + props.userName}>
          <img src={props.idImg} alt='idImg' height="30"/>
          {props.userName}
        </a>
      </td>
      <td>{props.recentPoints}</td>
      <td>{props.allTimePoints}</td>
    </tr>  
)

export default Camper;