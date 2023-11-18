import './App.css';
import LocationPhoto from './MapUI';
import EventForm from './Component/events';
import { useState } from 'react';
import locations from './location.json'

function App() {
  const [state, setState] = useState(null)
  const map = 'campus.png';
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

  const buildings = Object.entries(locations).map(([id, coordinates]) => ({ id, x: coordinates[0] * widthRatio, y: coordinates[1] * heightRatio }));
  console.log(buildings);

  const threshold = 25;

  const handleMapClick = (x, y) => {
    let closestBuildingId;
    let closest = 25;
    for (let i = 0; i < buildings.length; i++) {
      let distance = Math.sqrt(Math.pow((x - buildings[i].x), 2) + Math.pow((y - buildings[i].y), 2));
      if (distance < closest) {
        closest = distance;
        closestBuildingId = buildings[i].id;
      }
    }
    if (closest < threshold)
      setState(closestBuildingId)
    else
      setState(null)

    // if (closestBuildingId) {
    console.log(`x: ${x}, y:${y}, closest building: ${closestBuildingId}`);
    // }
  }

  return (
    <div className="App">
      <LocationPhoto
        imageUrl={map}
        onMapClick={handleMapClick} />
      <EventForm selected={state} />
    </div>
  );
}

export default App;
