import React, {useState} from "react";
const EventForm = () => {
    const [selectedLocation, setSelectedLocation] = useState('KA');

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
      };

    const data ={
        "KA": [
          { "event": "Riding a horse", "time": "2023-11-27 10:45:00" },
          { "event": "Jump off the cliff", "time": "2023-11-28 11:39:00" },
          { "event": "Jump off the building", "time": "2023-10-1 12:00:00" },
          { "event": "Sky diving", "time": "2023-11-22 12:00:00" },
          { "event": "Jump off the cliff", "time": "2023-11-24 13:00:00" }
        ],
        "FR": [
          { "event": "Sky diving", "time": "2023-11-27 10:45:00" },
          { "event": "Jump off the cliff", "time": "2023-11-28 11:39:00" },
          { "event": "Sky diving", "time": "2023-10-1 12:00:00" },
          { "event": "Sky diving", "time": "2023-11-22 12:00:00" },
          { "event": "Sky diving", "time": "2023-11-24 13:00:00" }
        ],
        "LS": [
            { "event": "Speaker: Jones", "time": "2023-11-24 13:00:00" },
            { "event": "Jump off the cliff", "time": "2023-10-1 12:00:00" },
            { "event": "Sky diving", "time": "2023-11-24 13:00:00" },
            { "event": "Sky diving", "time": "2023-11-22 12:00:00" },
            { "event": "Cookie event", "time": "2023-11-27 12:00:00" }
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
            <option value="LS">LS</option>
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