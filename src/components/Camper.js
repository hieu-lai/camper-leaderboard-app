import React from 'react';

const Camper = (props) => (
    <tr>
      <td>{props.rank}</td>
      <td><img src={props.idImg} alt='idImg' height="30"/>{props.userName}</td>
      <td>{props.recentPoints}</td>
      <td>{props.allTimePoints}</td>
    </tr>  
)

export default Camper;