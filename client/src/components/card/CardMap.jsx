import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const mapContainerStyle = {
  width: '85vw',
  height: '40vh',
};

const markerPosition = {
  lat: 43.6532225,
  lng: -79.383186,
};

const center = {
  lat: 43.6532225,
  lng: -79.383186,
};
const options = {
  zoomControl: false,
  streetViewControl: false,
  disableDefaultUI: true,
};

function CardMap() {
  const [markers, setMarkers] = useState([]);

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={7}
        center={center}
        options={options}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
    </>
  );
}

export default CardMap;
