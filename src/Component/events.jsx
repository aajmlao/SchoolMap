
const EventForm = () => {
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

    return(
        <div className="event-form-container">
      <div className="data-list">
        {/* Display events for "KA" */}
        <h2>Events in KA:</h2>
        <ul>
          {data["KA"].map((event, index) => (
            <li key={index}>{`Event: ${event.event}, Time: ${event.time}`}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};


export default EventForm;