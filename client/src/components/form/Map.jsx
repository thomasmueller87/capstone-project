import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const mapContainerStyle = {
  width: '55vw',
  height: '30vh',
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

function Map({ onHandleChangeMap }) {
  const [markers, setMarkers] = useState([]);

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={6}
        center={center}
        options={options}
        onClick={(event) => {
          setMarkers([
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
            },
          ]);
          onHandleChangeMap(
            event.latLng.lat(),
            event.latLng.lng()
          );
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
      </GoogleMap>
    </>
  );
}

export default Map;
