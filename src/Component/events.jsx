import React, {useState} from "react";
const EventForm = () => {
    const [selectedLocation, setSelectedLocation] = useState('KA');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
      };

    const data ={
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
      }

    const selectedEvents = data[selectedLocation];

    return(
        <div className="event-form-container">
      <div className="data-list">
        {/* Display events for "KA" */}
        <h2>Events in {selectedLocation}:</h2>
        <label>
          Select Location:
          <select value={selectedLocation} onChange={handleLocationChange}>
            <option value="KA">KA</option>
            <option value="FR">FR</option>
          </select>
        </label>
        <ul>
          {selectedEvents.map((event, index) => (
            <li key={index}>{`Event: ${event.event}, Time: ${event.time}`}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};


export default EventForm;