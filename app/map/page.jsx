"use client";

import GoogleMapReact from "google-map-react";
import { IoIosPin } from "react-icons/io";

export default function MapPage() {
  const defaultProps = {
    center: {
      lat: 33.6684907,
      lng: -117.7563644,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyABvv2OoDgpkUKitaNNvDTPKrM54nTiU38" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={33.6684907} lng={-117.7563644}  />
        <Marker lat={33.7029825} lng={-117.7121083}  />
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
