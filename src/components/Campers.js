import React from 'react';
import Camper from './Camper';

const Campers = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Camper Name</th>
          <th><button>Points in the past 30 days</button></th>
          <th><button>All time points</button></th> 
        </tr>
      </thead>
      <tbody>
        {props.campers.map((camper, index) => (
          <Camper 
            key={camper.username}
            rank={index + 1}
            userName={camper.username}
            idImg={camper.img}
            recentPoints={camper.recent}
            allTimePoints={camper.alltime}
          />
        ))}    
      </tbody>  
    </table> 
  </div>    
)

export default Campers;