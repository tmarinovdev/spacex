import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import dateFormat from 'dateformat';

export const Launch = () => {

  const { flyNumber } = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = '/api_to_external/' + flyNumber;

  const getApiItem = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.log('Fetch Error: ' + e);
      setError(e);
    }
  };

  useEffect(() => {
    getApiItem();
  }, []);

  if (loading) return <p className="infoTxt">Loading...</p>;
  if (error) return <p className="errTxt">Ops an Error!</p>;

  return (
    <div className="launchSpot">
      <h2>{data.mission_name}</h2>
      <h4>({data.mission_id[0] || 'N/A'})</h4>
      <p>{data.details || 'N/A'}</p>
      <div>
        <p><span>Rocket:</span> {data.rocket.rocket_name}</p>
        <p><span>Rocket type:</span> {data.rocket.rocket_type}</p>
      </div>
      <div>
        <p><span>Launch site:</span> {data.launch_site.site_name}</p>
        <p>{data.launch_site.site_name_long}</p>
      </div>
      <div>
        <p><span>Launch date UTC:</span> {dateFormat(data.launch_date_utc, "dS mmmm yyyy HH:MM")}</p>
        <p><span>Launch date local:</span> {dateFormat(data.launch_date_local, "dS mmmm yyyy HH:MM")}</p>
      </div>
      <div>
        <p><span>Ships:</span> {[...data.ships]}</p>
        <p><span>Telemetry:</span> {data.telemetry.flight_club || 'N/A'}</p>
      </div>
      <div className="goBackFooter">
        <Link className="btnDetails" to={{pathname: "/"}} >Back</Link>
      </div>
    </div>
  );
}