import { useState, useEffect } from 'react';
import axios from "axios";
import config from "../config";


const useGoogleAddress = address => {
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapsApiKey}`;
  const [map, setMap] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    };
    fetchData();
  }, []);
  return map;
};

export default useGoogleAddress;