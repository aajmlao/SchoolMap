import React from "react";
import './MapUI.css';
import locations from './location.json'
import events_data from "./events_list";
import { FaLocationDot } from "react-icons/fa6";


const LocationPhoto = ({ imageUrl, onMapClick }) => {
  const originalRes = {
    height: 1150,
    width: 1528
  };

  const displayedRes = {
    height: 560,
    width: 750
  };

  const widthRatio = displayedRes.width / originalRes.width;
  const heightRatio = displayedRes.height / originalRes.height;

  const [coordinates, setCoordinates] = React.useState({});
  React.useEffect(() => {
    const accumulatedCoordinates = {};
    for (const locationKey in locations) {

      // Check if the location key exists in the events object
      if (events_data.hasOwnProperty(locationKey)) {
        // Get the x and y coordinates for the specified location key from the locations object
        const [x, y] = locations[locationKey];
        // setCoordinates({x,y}); 
        accumulatedCoordinates[locationKey] = { x, y };
        console.log(`Coordinates for ${locationKey}: x=${x}, y=${y}`);
      } else {
        console.log(`Location key "${locationKey}" not found in events`);
      }
      setCoordinates(accumulatedCoordinates);

    }
  }, []);

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
      <div className="marker">
        {/* Map through the coordinates object to render markers */}
        {Object.entries(coordinates).map(([key, coord]) => (
          <div
            key={key}

            style={{
              width: '25px',
              height: '25px',
              // backgroundColor: 'orange' ,
              // borderRadius: '50%',
              position: 'absolute',
              left: `${coord.x * widthRatio - 20}px`,
              top: `${coord.y * heightRatio - 45}px`,
              cursor: 'pointer'
            }}
          >

            <div id="location">
              <img src='usf_marker.png' className="marker-hover"/>
            </div>
          </div>
        ))}
      </div>
      <div className="centered-image-wrapper">
        <img src={imageUrl} alt="Location" className="location-photo" />
      </div>
    </div>

  );
};

export default LocationPhoto;