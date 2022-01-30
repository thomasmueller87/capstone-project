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

function CardMap({ logData }) {
  const latNumber = Number(logData.posLat);
  const lngNumber = Number(logData.posLng);
  const position = {
    lat: latNumber,
    lng: lngNumber,
  };

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={position}
        options={options}
      >
        <Marker position={position} />
      </GoogleMap>
    </>
  );
}

export default CardMap;
