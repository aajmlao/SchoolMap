import React, { useState } from 'react';

const MapComponent = ({children}) => {
  // State to track whether the table should be visible or not
  const [showTable, setShowTable] = useState(false);
  const [clicked, setClicked] = useState(true);

  // Function to handle the click event
  const handleMapClick = (event) => {
    // Get the coordinates of the click event
    const clickX = event.nativeEvent.offsetX;
    const clickY = event.nativeEvent.offsetY;
  
    // Check if the click coordinates are within the specified region (688, 261)
    const regionX = 688;
    const regionY = 261;
    const regionWidth = 50;
    const regionHeight = 50;
  
    if (
      clickX >= regionX &&
      clickX <= regionX + regionWidth &&
      clickY >= regionY &&
      clickY <= regionY + regionHeight
    ) {
      // If the click is within the specified region, show the table and set a flag to indicate the click
      setShowTable(true);
      setClicked(true)
    } else {
      // If the click is outside the specified region, reset the flag
      setClicked(true)
    }
  };

  const redOverlayStyle = {
    position: 'absolute',
    top: '261px',
    left: '688px',
    width: '50px',
    height: '50px',
    background: 'rgba(255, 0, 0, 0.5)', // Red with 50% opacity
    pointerEvents: 'none', // Ensures the overlay doesn't interfere with clicks on elements beneath it
  
  };

  return (
    <div>
    <div
      onClick={handleMapClick}
    > 
      {children}
      {/* Show the red overlay only when the region is clicked */}
      {clicked && <div style={redOverlayStyle}></div>}
      {/* You can add other map-related content here if needed */}
    </div>

    {/* Conditional rendering of the table */}
    {showTable && (
      <table>
        {/* Your table content goes here */}
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {/* Add rows and data as needed */}
        </tbody>
      </table>
    )}
  </div>

  );
};

export default MapComponent;
const MapComponent = () => {
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
}
