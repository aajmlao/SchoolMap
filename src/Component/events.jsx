import React, { useState } from "react";
import { DiReact } from "react-icons/di";
import '../App.css';
import events_data from "../events_list";

const EventForm = ({selected }) => {
   
    let selectedEvents = selected ? events_data[selected]: [];
    const [selectedEventInfo, setSelectedEventInfo] = useState(null);
    const handleLearnMoreClick = (info) => {
      setSelectedEventInfo(info);
    };
    const handleCloseModal = () => {
      setSelectedEventInfo(null);
    };

  return (

    <div className={selected ? "event-form-container" : "event-form-container-hidden"}>
      <div className="data-list">
        {/* Display events for "KA" */}
        <div className="title-box">
          <DiReact size={30} />
          <h2>Events in {selected}: </h2>
        </div>

        <ul className="events-List">
          {selectedEvents.map((event, index) => (
            // <li key={index}> {`Event: ${event.event}, Time: ${event.time}`} </li>
            <React.Fragment key={index}>
            <div className="event-block">
            <li>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                {`Event: ${event.event}`}
                </a>
                </li>
            <li>{`Time: ${event.time}`}</li>
            {event.info && (
                <li>
                  <button onClick={() => handleLearnMoreClick(event.info)}>Learn more</button>
                </li>
              )}
            </div>
        </React.Fragment>
           
          ))}
        </ul>
      </div>
      {/* Modal for displaying additional information */}
      {selectedEventInfo && (
        <div className="modal">
          <div className="modal-content">
            
            <h3>Additional Information</h3>
            <p>{selectedEventInfo}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>


  );
};


export default EventForm;