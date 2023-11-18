import React, { useState, useEffect } from 'react';

const RenderMarker = () => {
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
    const events = {
      "KA": [
        { "event": "Riding a horse", "time": "2023-11-27 10:39:52.315189" },
        { "event": "Jump off the cliff", "time": "2023-11-27 10:39:52.315189" },
        { "event": "Jump off the building", "time": "2023-11-27 10:39:52.315189" },
        { "event": "Sky diving", "time": "2023-11-22 10:39:52.315189" },
        { "event": "Jump off the cliff", "time": "2023-11-24 10:39:52.315189" }
      ],
      "FR": [
        { "event": "Sky diving", "time": "2023-11-23 10:39:52.315189" },
        { "event": "Jump off the cliff", "time": "2023-11-22 10:39:52.315189" },
        { "event": "Sky diving", "time": "2023-11-21 10:39:52.315189" },
        { "event": "Sky diving", "time": "2023-11-18 10:39:52.315189" },
        { "event": "Sky diving", "time": "2023-11-27 10:39:52.315189" }
      ]
    };
    const [coordinates, setCoordinates] = useState({});
    useEffect(() => {
      const accumulatedCoordinates = {};
      for (const locationKey in locations) {
        
          // Check if the location key exists in the events object
          if (events.hasOwnProperty(locationKey)) {
            // Get the x and y coordinates for the specified location key from the locations object
            const [x, y] = locations[locationKey];
            // setCoordinates({x,y}); 
            accumulatedCoordinates[locationKey] = { x, y };
            console.log(`Coordinates for ${locationKey}: x=${x*widthRatio}, y=${y*heightRatio}`);
          } else {
            console.log(`Location key "${locationKey}" not found in events`);
          }
          setCoordinates(accumulatedCoordinates);

    }} ,[]);

    return (
      <div class = "marker">
      {/* Map through the coordinates object to render markers */}
      {Object.entries(coordinates).map(([key, coord]) => (
        <div
          key={key}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'red',
            borderRadius: '50%',
            position: 'absolute',
            left: `${coord.x}}px`,
            top: `${coord.y*heightRatio}px`,
          }}
        ></div>
      ))}
    </div>
    );
  };

export default RenderMarker;