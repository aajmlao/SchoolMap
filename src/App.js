import './App.css';
import LocationPhoto from './MapUI';
import EventForm from './Component/events';

function App() {
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

  const buildings = [
    { id: 'LME', coordinates: { x: 1024 * widthRatio, y: 204 * heightRatio } },
    { id: 'LV', coordinates: { x: 1026 * widthRatio, y: 122 * heightRatio } },
    { id: 'LM', coordinates: { x: 688 * widthRatio, y: 261 * heightRatio } },
    { id: 'FR', coordinates: { x: 523 * widthRatio, y: 760 * heightRatio } },
    { id: 'GL', coordinates: { x: 629 * widthRatio, y: 732 * heightRatio } },
    { id: 'KO', coordinates: { x: 262 * widthRatio, y: 695 * heightRatio } },
  ]

  const threshold = 25;

  const handleMapClick = (x, y) => {
    let closestBuildingId;
    let closest = 25;
    for (let i = 0; i < buildings.length; i++) {
      let distance = Math.sqrt(Math.pow((x - buildings[i].coordinates.x), 2) + Math.pow((y - buildings[i].coordinates.y), 2));
      if (distance < closest) {
        closest = distance;
        closestBuildingId = buildings[i].id;
      }
    }
    console.log(`x: ${x}, y:${y}, closest building: ${closestBuildingId}`);
  }

  return (
    <div className="App">
      <LocationPhoto
        imageUrl={map}
        onMapClick={handleMapClick} />
      <EventForm />
    </div>
  );
}

export default App;
