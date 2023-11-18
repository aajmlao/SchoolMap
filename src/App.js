import './App.css';
import React, {useEffect, useState} from 'react';
import EventForm from './Component/events';

function App() {

  return (
    <div className="App">
        <img src='campus.png'/>
      <EventForm />
    </div>
  );
}

export default App;
