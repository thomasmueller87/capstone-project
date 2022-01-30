import { GoogleMap, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';

const mapContainerStyle = {
  width: '55vw',
  height: '30vh',
};

const options = {
  zoomControl: false,
  streetViewControl: false,
  disableDefaultUI: true,
};

function EditMap({ onHandleChangeMap, editLog }) {
  function findCenter() {
    const centerLatNumber = Number(editLog.posLat);
    const centerLngNumber = Number(editLog.posLng);
    const centerPosition = {
      lat: centerLatNumber,
      lng: centerLngNumber,
    };
    setCenter(centerPosition);
  }

  useEffect(() => findCenter(), []);

  const latNumber = Number(editLog.posLat);
  const lngNumber = Number(editLog.posLng);
  const position = {
    lat: latNumber,
    lng: lngNumber,
  };

  const [markers, setMarkers] = useState([position]);

  const [center, setCenter] = useState({
    lat: 51.2257710851142,
    lng: 6.769391671626233,
  });

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
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

export default EditMap;

// return (
//   <>
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={13}
//       center={position}
//       options={options}
//     >
//       <Marker position={position} />
//     </GoogleMap>
