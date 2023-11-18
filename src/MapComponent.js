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