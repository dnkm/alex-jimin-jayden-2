"use client";

import GoogleMapReact from "google-map-react";
import { IoIosPin } from "react-icons/io";

const MARKERS = [
  { lat: 33.7545573, lng: -117.8706079 },
  { lat: 33.7519656, lng: -117.8721971 },
  { lat: 33.7026548, lng: -117.7841254 },
  { lat: 33.6944381, lng: -117.7772115 },
  { lat: 33.6684907, lng: -117.7563644 },
  { lat: 33.7029825, lng: -117.7121083 },
];

export default function MapPage() {
  const defaultProps = {
    center: {
      lat: 33.6684907,
      lng: -117.7563644,
    },
    zoom: 11,
  };

  const renderMarkers = (map, maps) => {
    return MARKERS.map(
      (m) =>
        new maps.Marker({
          position: m,
          map,
          title: "school",
        })
    );
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyABvv2OoDgpkUKitaNNvDTPKrM54nTiU38" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals
      >
      </GoogleMapReact>
    </div>
  );
}

function Marker({ text }) {
  return (
    <div className="text-red-700 text-3xl">
      <IoIosPin />
    </div>
  );
}
