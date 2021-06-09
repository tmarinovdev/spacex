import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Items } from './Items';
import { Pagination } from './Pagination';

export const FetchAxLaunches = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  const url = 'https://api.spacexdata.com/v3/launches';

  const getApiItemsWithAxios = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setData(response.data);
      setLoading(false);
    } catch (e) {
      console.log('Fetch Error: ' + e);
      setError(e);
    }
  };

  useEffect(() => {    
    getApiItemsWithAxios();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (loading) return "Loading...";
  if (error) return "Error!";
  
  // const items = data.map((item, i) => (
  //   <div key={item.flight_number + i}>
  //     <div>Mission: {item.mission_name}</div> 
  //     <div>Date: {item.launch_date_local}</div> 
  //     <div>Rocket: {item.rocket.rocket_name}</div>
  //   </div>
  // ));

  return (
    <>
      <Items items={currentItems} loading={loading} />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />
    </>
  );
}