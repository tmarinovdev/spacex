import React from 'react';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

export const Items = ({ items }) => {
  return (
    <table className='allLaunches'>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Date</th>
          <th>Rocket</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {items &&
        items.map((item, i) => (
        <tr key={item.flight_number + i}>
          <td data-label="Mission">{item.mission_name}</td> 
          <td data-label="Date">{dateFormat(item.launch_date_local, "dS mmmm yyyy HH:MM")}</td> 
          <td data-label="Rocket">{item.rocket.rocket_name}</td>
          <td>
              <Link className="btnDetails"
                to={{
                  pathname: "/Launch",
                  flyNumber: item.flight_number
                }} 
              >View details</Link>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

Items.propTypes = {
  items: PropTypes.array
};