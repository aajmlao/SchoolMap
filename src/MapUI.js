import React from "react";
import './MapUI.css';
import { FaLocationDot } from "react-icons/fa6";


const LocationPhoto = ({ imageUrl, onMapClick}) => {
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
  const locations = {
    "LM": [688, 261],
    "LMP": [620, 266],
    "ST": [788, 298],
    "LMR": [832, 299],
    "LH": [878, 257],
    "LV": [1026, 122],
    "LME": [1024, 204],
    "TC": [1261, 388],
    "PT": [1251, 438],
    "ED": [1256, 499],
    "MA": [1423, 470],
    "KO": [262, 695],
    "FR": [523, 760],
    "SI": [507, 899],
    "GL": [629, 732],
    "LS": [754, 780],
    "HR": [746, 686],
    "KA": [743, 937],
    "CO": [808, 854],
    "MH": [879, 883],
    "MC": [835, 818],
    "TH": [981, 817],
    "FH": [964, 946],
    "GI": [1111, 770],
    "HH": [1166, 673],
    "KN": [483, 1046],
    "ZLL": [603, 1035]
  };
  const events ={
    "LM": [
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" }
    ],
    "LMP": [
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" }
    ],
    "ST": [
      { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" }
    ],
    "LMR": [
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" }
    ],
    "LH": [
      { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" }
    ],
    "LV": [
      { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-19 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" }
    ],
    "LME": [
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-19 14:35:16.927837" }
    ],
    "TC": [
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" }
    ],
    "PT": [
      { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" }
    ],
    "ED": [
      { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" }
    ],
    "MA": [
      { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" }
    ],
    "KO": [
      { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" }
    ],
    "FR": [
      { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" }
    ],
    "SI": [
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" }
    ],
    "GL": [
      { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" }
    ],
    "LS": [
      { "event": "Riding a horse", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" }
    ],
    "HR": [
      { "event": "Sky diving", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-19 14:35:16.927837" }
    ],
    "KA": [
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-19 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" }
    ],
    "CO": [
      { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" }
    ],
    "MH": [
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-19 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" }
    ],
    "MC": [
      { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
    ],
    "TH": [
      { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" }
    ],
    "FH": [
      { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" }
    ],
    "GI": [
      { "event": "Sky diving", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Sky diving", "time": "2023-11-24 14:35:16.927837" }
    ],
    "HH": [
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" }
    ],
    "KN": [
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
    ],
    "ZLL": [
      { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
      { "event": "Jump off the cliff", "time": "2023-11-27 14:35:16.927837" },
      { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
      { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
    ]
  };
  
  const [coordinates, setCoordinates] = React.useState({});
  React.useEffect(() => {
    const accumulatedCoordinates = {};
    for (const locationKey in locations) {
      
        // Check if the location key exists in the events object
        if (events.hasOwnProperty(locationKey)) {
          // Get the x and y coordinates for the specified location key from the locations object
          const [x, y] = locations[locationKey];
          // setCoordinates({x,y}); 
          accumulatedCoordinates[locationKey] = { x, y };
          console.log(`Coordinates for ${locationKey}: x=${x}, y=${y}`);
        } else {
          console.log(`Location key "${locationKey}" not found in events`);
        }
        setCoordinates(accumulatedCoordinates);

  }} ,[]);

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
        <div class = "marker">
        {/* Map through the coordinates object to render markers */}
        {Object.entries(coordinates).map(([key, coord]) => (
          <div
            key={key}
            
            style={{
              width: '35px',
              height: '35px',
              // backgroundColor: 'orange' ,
              // borderRadius: '50%',
              position: 'absolute',
              left: `${coord.x*widthRatio-20}px`,
              top: `${coord.y*heightRatio-30}px`,
            }}
          >
            
          <div id="location">
          <img src='usf_marker.png'/>
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