import React, { FC } from "react";
// import MapComponent from "./Marker.jsx";
import MapComponent from "./Marker";

const BaseMap: FC = () => {
  return (
    <div className="flex justify-center">
      <MapComponent />
    </div>
  );
};

export default BaseMap;
