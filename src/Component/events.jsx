import React, {useState} from "react";

const EventForm = ({selected}) => {
   
    const data = {
        "LM": [
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" }
        ],
        "LMP": [
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" }
        ],
        "ST": [
          { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" }
        ],
        "LMR": [
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" }
        ],
        "LH": [
          { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" }
        ],
        "LV": [
          { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-19 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" }
        ],
        "LME": [
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-19 14:35:16.927837" }
        ],
        "TC": [
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" }
        ],
        "PT": [
          { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" }
        ],
        "ED": [
          { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" }
        ],
        "MA": [
          { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" }
        ],
        "KO": [
          { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" }
        ],
        "FR": [
          { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-18 14:35:16.927837" }
        ],
        "SI": [
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" }
        ],
        "GL": [
          { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-23 14:35:16.927837" }
        ],
        "LS": [
          { "event": "Riding a horse", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" }
        ],
        "HR": [
          { "event": "Sky diving", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-19 14:35:16.927837" }
        ],
        "KA": [
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-19 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" }
        ],
        "CO": [
          { "event": "Riding a horse", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" }
        ],
        "MH": [
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-19 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" }
        ],
        "MC": [
          { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
        ],
        "TH": [
          { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-26 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-26 14:35:16.927837" }
        ],
        "FH": [
          { "event": "Jump off the building", "time": "2023-11-24 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-26 14:35:16.927837" }
        ],
        "GI": [
          { "event": "Sky diving", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-18 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Sky diving", "time": "2023-11-24 14:35:16.927837" }
        ],
        "HH": [
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-20 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-23 14:35:16.927837" }
        ],
        "KN": [
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-25 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-23 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
        ],
        "ZLL": [
          { "event": "Jump off the building", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-21 14:35:16.927837" },
          { "event": "Jump off the cliff", "time": "2023-11-27 14:35:16.927837" },
          { "event": "Riding a horse", "time": "2023-11-22 14:35:16.927837" },
          { "event": "Jump off the building", "time": "2023-11-22 14:35:16.927837" }
        ]
      }
      
    

    let selectedEvents = selected ? data[selected]: [];

    return(
        
    <div className={selected ? "event-form-container":"event-form-container-hidden"}>
      <div className="data-list">
        {/* Display events for "KA" */}
        <h2>Events in {selected}:</h2>
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