import React from 'react';
import { Link } from 'react-router-dom';


export const PageNotFound = () => {
  return (
    <div className="infoTxt">
      <h3>404 Not Found!</h3>
      <Link className="btnDetails" to={{pathname: "/"}} >Back</Link>
    </div>
  );
};