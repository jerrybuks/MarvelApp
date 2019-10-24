import React from 'react';
import NotFound  from './assets/giphy.gif'

const CharNotFound = () => {
  return (
   <div style={{ textAlign: 'center', fontStyle: 'italic'}} className="text-danger ">
       <div  style={{ padding: '15px'}}>character not found</div>
       <img src={NotFound} alt="Notfound" style={{ width: '70%'}}/>
   </div>
    )
}

export default CharNotFound;
