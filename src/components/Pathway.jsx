import { useState, useContext } from "react";

import pathwayData from "../data/DUMMY_DATA";
import PathwayDataContext from "../store/PathwayDataContext";

function Pathway({ selectedPathway }) {
  const pathway = pathwayData[selectedPathway];
  const [openIndex, setOpenIndex] = useState(-1);
  const { pathwayArrData, setPathwayArrData } = useContext(PathwayDataContext);

  return (
    <div className="pathway-container">
      <h1 className="title">{selectedPathway.replace(/_/g, " ")}</h1>
      <div className="key">
        <span className="dot complete" /> Complete
        <span className="dot upcoming" /> Upcoming
      </div>
      <ol className="timeline">
        {pathway.map((stage, i) => {
          const completedStages = pathwayArrData[selectedPathway];
          const isComplete = completedStages.includes(i);
          return (
            <li key={stage.title} className="entry">
              <div
                className={`marker ${isComplete ? " complete" : " active"}`}
              />
              <div className="content">
                <button
                  className="stage"
                  onClick={() => {
                    if (openIndex === i) {
                      setOpenIndex(-1);
                    } else {
                      setOpenIndex(i);
                    }
                  }}
                >
                  <span className="stage-title">{stage.title}</span>
                </button>
                <ul className={`items ${openIndex === i ? "show" : "hide"}`}>
                  {stage.items.map((item) => (
                    <li key={item.label} className="item">
                      <a href={item.url} target="_blank">
                        <span className="item-label">{item.label}</span>
                      </a>
                      <span className="item-details">{item.details}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mark-button ${isComplete ? "undo" : "done"}`}
                  onClick={() =>
                    setPathwayArrData(selectedPathway, i, stage.title)
                  }
                >
                  {isComplete ? "Undo Complete" : "Mark Complete"}
                </button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Pathway;
