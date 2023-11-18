import React from "react";
import './MapUI.css';

const LocationPhoto = ({ imageUrl, onMapClick }) => {
  const handleClick = (event) => {
    const container = event.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (onMapClick) {
      onMapClick(x, y);
    }
  };

  return (
    <div className="location-photo-container" onClick={(event) => handleClick(event)}>
      <img src={imageUrl} alt="Location" className="location-photo" />
    </div>
  );
};

export default LocationPhoto;