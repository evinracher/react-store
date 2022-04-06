import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import config from "../../config";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.googleMapsApi
  });

  const mapStyles = {
    height: "50vh",
    with: "100%",
  };

  const defaultCenter = {
    lat: 19.4268,
    lng: -99.17
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded && (
    <GoogleMap
      mapContainerStyle={mapStyles}
      Zoom={17}
      center={defaultCenter}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={defaultCenter} />
    </GoogleMap>
  );

};

export default Map;