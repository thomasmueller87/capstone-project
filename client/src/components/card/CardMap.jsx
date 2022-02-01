import { GoogleMap, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '85vw',
  height: '40vh',
};

const options = {
  zoomControl: false,
  streetViewControl: false,
  disableDefaultUI: true,
};

function CardMap({ posLat, posLng }) {
  const latNumber = Number(posLat);
  const lngNumber = Number(posLng);
  const position = {
    lat: latNumber,
    lng: lngNumber,
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={position}
        options={options}
      >
        <Marker position={position} />
      </GoogleMap>
    </>
  );
}

export default CardMap;
