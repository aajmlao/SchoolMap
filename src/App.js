import logo from './logo.svg';
import './App.css';
import MapComponent from './MapComponent'; 


function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <MapComponent>
        <img src='campus.png'/>
        </MapComponent>
        
        {/* <img src='campus.png'/> */}

      </header>
    </div>
  );
}

export default App;
