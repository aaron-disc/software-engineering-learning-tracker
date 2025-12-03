import { useContext } from "react";

import pathwayData from "../data/DUMMY_DATA";

import PageContext from "../store/PageContext";
import PathwayContext from "../store/PathwayContext";
import PathwayDataContext from "../store/PathwayDataContext";
import Pathway from "./Pathway";

function Dashboard() {
  const { setContent } = useContext(PageContext);
  const { pathway } = useContext(PathwayContext);
  const { pathwayArrData } = useContext(PathwayDataContext);

  let nextStage = "";
  let achievements = [];
  const moduleProgress =
    pathway &&
    Math.round(
      (pathwayArrData[pathway].length / pathwayData[pathway].length) * 100
    );

  if (moduleProgress === 100) {
    achievements.push(`Completed the ${pathway.replace(/_/g, " ")} pathway!`);
    nextStage = "All stages completed";
  } else if (pathway) {
    for (let i = 0; i < pathwayData[pathway].length; i++) {
      if (pathwayArrData[pathway][i] !== i) {
        nextStage = pathwayData[pathway][i].title;
        break;
      }
    }
  }

  return (
    <div className="page" style={{ padding: "2rem 5rem" }}>
      {pathway ? (
        <>
          <header className="dashboard-header">
            <p>Here's your current learning progress and goals.</p>
          </header>
          <section className="current-pathway">
            <h2>Current Pathway</h2>
            <div className="pathway-card">
              <Pathway selectedPathway={pathway} />
            </div>
          </section>
          <div className="stats-grid">
            <div className="stat-card">
              <h2>Module Progress</h2>
              <h1>{moduleProgress}%</h1>
              <p></p>
            </div>
            <div className="stat-card">
              <h2>Next Stage</h2>
              <p>{nextStage}</p>
              <p>
                {nextStage !== "All stages completed" &&
                  pathway.replace(/_/g, " ")}
              </p>
            </div>
            <div className="stat-card">
              <h2>Achievements</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <button className="next-button" onClick={() => setContent("pathways")}>
          Explore Pathways →
        </button>
      )}
    </div>
  );
}

export default Dashboard;
