import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import MapComponent from "./LocMap/Marker";

const MapSection = () => {
  const position = [51.505, -0.09];
  return (
    <div className="container mx-auto p-4  w-[90vmax]  bg-[#fff] drop-shadow-block rounded-[3rem]">
      <MapComponent />
    </div>
  );
};

export default MapSection;
