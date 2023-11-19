import React, {useState} from "react";
import { DiReact } from "react-icons/di";
import '../App.css';


const EventForm = ({selected }) => {
   
    const data = {
        "LM": [
            { "event": "Performing Arts & Social Justice Presents: Boundless", "time": "2023-11-08 08PM-09PM ","link":"https://www.usfca.edu/event/performing-arts-social-justice-presents-boundless/10779106" }
        ],
        "LMP": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Night", "time": "2023-11-23 19:35:00" },
            { "event": "Study Lunch", "time": "2023-11-26 14:35:00" }
        ],
        "ST": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "LMR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "LH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "LV": [
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "LME": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "TC": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "PT": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "ED": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "MA": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "KO": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "FR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "SI": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "GL": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "LS": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "HR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "KA": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "CO": [
            { "event": "Speaker event", "time": "2023-08-03 14:35:00" },
            { "event": "Study Lunch", "time": "2023-09-21 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "MH": [
            { "event": "Speaker event", "time": "2023-09-20 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-10-18 14:35:00" },
            { "event": "Speaker event", "time": "2023-09-20 14:35:00" },
            { "event": "Study night", "time": "2023-11-30 17:35:00" }
        ],
        "MC": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" }
        ],
        "TH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "FH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "GI": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "HH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ],
        "KN": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" },
            { "event": "Speaker event", "time": "2023-10-2 14:35:00" },
            { "event": "Study Lunch", "time": "2023-12-21 14:35:00" },
            { "event": "Study night", "time": "2023-12-21 17:35:00" }
        ],
        "ZLL": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" },
            { "event": "Study night", "time": "2023-11-21 17:35:00" }
        ]
      }
      
    

    let selectedEvents = selected ? data[selected]: [];

    return(
        
    <div className={selected ? "event-form-container":"event-form-container-hidden"}>
      <div className="data-list">
        {/* Display events for "KA" */}
        <div className="title-box">
            <DiReact size={30}/>
            <h2>Events in {selected}: </h2>
        </div>
        
        <ul className="events-List">
          {selectedEvents.map((event, index) => (
            // <li key={index}> {`Event: ${event.event}, Time: ${event.time}`} </li>
            <React.Fragment key={index}>
            <li>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                {`Event: ${event.event}`}
                </a>
                </li>
            <li>{`Time: ${event.time}`}</li>
        </React.Fragment>
           
          ))}
        </ul>
      </div>
    </div>


  );
};


export default EventForm;