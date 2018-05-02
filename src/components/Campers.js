import React from 'react';
import Camper from './Camper';

const Campers = () => (
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
        <Camper />  
      </tbody>  
    </table> 
  </div>    
)

export default Campers;