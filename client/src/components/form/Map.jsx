import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState } from 'react';

const mapContainerStyle = {
  width: '85vw',
  height: '30vh',
};

const options = {
  zoomControl: false,
  streetViewControl: false,
  disableDefaultUI: true,
};

function Map({ onHandleChangeMap }) {
  const [markers, setMarkers] = useState([]);
  const [currentPosition, setCurrentPosition] = useState({
    lat: 51.2257710851142,
    lng: 6.769391671626233,
  });

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      (error) => console.log(error);
    }
  };

  return (
    <>
      <GoogleMap
        onLoad={getGeoLocation}
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={currentPosition}
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
