import React, { useState } from "react";
import { DiReact } from "react-icons/di";
import '../App.css';


const EventForm = ({selected }) => {
   
    const data = {
        "LM": [
            { "event": "Performing Arts & Social Justice Presents: Boundless", "time": "2023-11-08 08PM-09PM ","link":"https://www.usfca.edu/event/performing-arts-social-justice-presents-boundless/10779106","info": null },
            {"event": "Black Catholic History Month", "time": "2023-11-30 05PM-06PM ","link":"https://www.usfca.edu/event/black-catholic-history-month/10652086","info": "In USFs fifth annual event honoring Black Catholic History Month, Dr. Ansel Augustine will cultivate an intergenerational conversation about racial justice and the Catholic Church. Dr. Ansel Augustine is an Emmy nominated producer and an award-winning author. He is presently the Director of the Office of Black Catholic Ministries for the Archdiocese of New Orleans. Dr. Augustine also serves on the Board of Trustees of St. Michael’s College (Burlington, Vermont). He is also on the Board of Directors for the Congo Square Preservation Society. He is the former New Orleans Area Director for Vagabond Missions and Executive Director of Cultural Diversity and Outreach for the Archdiocese of Washington. Previously he served as the Associate Director/Coordinator of Black Youth & Young Adult Ministry for the CYO Youth & Young Adult Ministry Office. He is also on the Faculty of the Institute for Black Catholic Studies at Xavier University of Louisiana, Graduate Theological Foundation, and Loyola University New Orleans’ Institute for Ministry. Dr. Augustine has also served as a Campus Minister at Xavier University of Louisiana."}
        ],
        "LMP": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Night", "time": "2023-11-23 19:35:00","info": null  },
            { "event": "Study Lunch", "time": "2023-11-26 14:35:00" ,"info": null }
        ],
        "ST": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00","info": null  },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null }
        ],
        "LMR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "LH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null  },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00","info": null  },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null  }
        ],
        "LV": [
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "LME": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "TC": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "PT": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "ED": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00","info": null  },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "MA": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "KO": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "FR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null  }
        ],
        "SI": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00","info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "GL": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "LS": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00","info": null  },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null }
        ],
        "HR": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "KA": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00","info": null  },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00","info": null  },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "CO": [
            { "event": "Speaker event", "time": "2023-08-03 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-09-21 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00","info": null  },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null  }
        ],
        "MH": [
            { "event": "Speaker event", "time": "2023-09-20 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-10-18 14:35:00","info": null },
            { "event": "Speaker event", "time": "2023-09-20 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-30 17:35:00" ,"info": null }
        ],
        "MC": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null }
        ],
        "TH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "FH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "GI": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null }
        ],
        "HH": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null  }
        ],
        "KN": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-10-2 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-12-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-12-21 17:35:00" ,"info": null }
        ],
        "ZLL": [
            { "event": "Speaker event", "time": "2023-11-23 14:35:00","info": null  },
            { "event": "Riding a horse", "time": "2023-11-22 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Riding a horse", "time": "2023-11-18 14:35:00" ,"info": null },
            { "event": "Speaker event", "time": "2023-11-23 14:35:00" ,"info": null },
            { "event": "Study Lunch", "time": "2023-11-21 14:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00" ,"info": null },
            { "event": "Study night", "time": "2023-11-21 17:35:00","info": null  }
        ]
      }
      
    

    let selectedEvents = selected ? data[selected]: [];
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