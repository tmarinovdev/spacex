import React from 'react';

export const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='list-group mb-4'>
      {items.map((item, i) => (
        <div key={item.flight_number + i}>
          <div>Mission: {item.mission_name}</div> 
          <div>Date: {item.launch_date_local}</div> 
          <div>Rocket: {item.rocket.rocket_name}</div>
        </div>
      ))}
    </div>
  );
};