'use client';

import GoogleMap from 'google-maps-react-markers';
import { useRef } from 'react';
import { FaLocationDot } from "react-icons/fa6";


const CustomMarker = ({ lat, lng, icon, onClick }: any) => (
  <div
    style={{ position: 'absolute', transform: 'translate(-50%, -50%)', cursor: 'pointer' }}
    onClick={onClick}
  >
    {icon}
  </div>
);

export default function GoogleMapComponent({ loc, mark, zoom }: any) {
  const mapRef: any = useRef(null);
  const { longitude, latitude } = loc

  const markedLoc = {
    lng: longitude,
    lat: latitude,
    icon: <FaLocationDot style={{ color: 'red', height: '50px', width: '50px' }} />
  }

  const onGoogleApiLoaded = ({ map, maps }: any) => {
    mapRef.current = map;
  };

  const mapOptions = (maps: any) => ({
    mapTypeId: maps.MapTypeId.SATELLITE,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: maps.ControlPosition.BOTTOM_CENTER
    },
    fullscreenControl: true,
    styles: [{
      featureType: "poi.business",
      stylers: [{ visibility: "on" }]
    }]
  });

  return <div style={{ height: "100%", width: '100%' }}>
    <GoogleMap
      apiKey="AIzaSyAFtCeCUYm6K1QXujT_m17aRvbC9hRxr2k"
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={zoom}
      options={mapOptions}
      mapMinHeight="100%"
      onGoogleApiLoaded={onGoogleApiLoaded}
    >

      <CustomMarker
        lat={markedLoc.lat}
        lng={markedLoc.lng}
        icon={markedLoc.icon}
      />

    </GoogleMap>
  </div>
}

