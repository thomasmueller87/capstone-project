import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { useState } from 'react';

const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '80vh',
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

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDxPEN4kv3Ilsp1aClvbHPbcBaWvMXy_UM',

    libraries,
  });

  const [markers, setMarkers] = useState([]);

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading maps';

  return (
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
      }}
    >
      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
          draggable={true}
        />
      ))}
    </GoogleMap>
  );
}

export default Map;
