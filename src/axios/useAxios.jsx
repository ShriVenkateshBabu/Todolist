import React, { useEffect } from 'react';
import AxiosInstance from './BaseURL';

const useAxios = () => {
 const [data,setData] = React.useState([])
  const FetchData = async () => {
    console.log("Fetching data from API...");
    try {
      const response = await AxiosInstance.get("/items"); // fetches from /items/
      console.log("Data fetched successfully:", response.data); // <- log .data
      const data = response.data; // <- store the data
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return data
  ;
};

export default useAxios;
