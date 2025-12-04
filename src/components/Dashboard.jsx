import { useContext } from "react";

import pathwayData from "../data/DUMMY_DATA";
import PageContext from "../store/PageContext";
import PathwayContext from "../store/PathwayContext";
import PathwayDataContext from "../store/PathwayDataContext";

function Dashboard() {
  const { setContent } = useContext(PageContext);
  const { pathway } = useContext(PathwayContext);
  const { pathwayArrData, achievements } = useContext(PathwayDataContext);

  let nextStage = "";

  const moduleProgress =
    pathway &&
    Math.round(
      (pathwayArrData[pathway].length / pathwayData[pathway].length) * 100
    );

  const stagesCompleted = pathway ? pathwayArrData[pathway].length : 0;
  const totalStages = pathway ? pathwayData[pathway].length : 0;

  if (moduleProgress === 100) {
    nextStage = "All stages completed";
  } else if (pathway) {
    for (let i = 0; i < pathwayData[pathway].length; i++) {
      if (!pathwayArrData[pathway].includes(i)) {
        nextStage = pathwayData[pathway][i].title;
        break;
      }
    }
  }

  return (
    <div className="page" style={{ padding: "2rem 5rem" }}>
      <>
        <header className="dashboard-header">
          <h1>Learning Dashboard</h1>
        </header>
        <div className="stats-grid">
          <div className="stat-card first-column">
            <h2>{pathway ? "Current pathway:" : "Select a pathway"}</h2>
            <h1>
              {pathway ? (
                pathway.replace(/_/g, " ")
              ) : (
                <button
                  className="next-button"
                  onClick={() => setContent("Pathways")}
                >
                  Explore Pathways →
                </button>
              )}
            </h1>
          </div>
          {pathway && (
            <>
              <div className="stat-card wide-element">
                <h2>Achievements</h2>
                {achievements.length > 0 ? (
                  <ul className="stat-card-list">
                    {achievements.map((achievement, index) => (
                      <li key={index}>
                        <p style={{ fontSize: "18px" }}>{achievement}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No achievements yet. Keep going!</p>
                )}
              </div>
              <div className="stat-card">
                <h2>Module Progress</h2>
                <h1>{moduleProgress || 0}%</h1>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${moduleProgress || 0}%` }}
                  />
                </div>
                <p>
                  {stagesCompleted} / {totalStages} stages completed
                </p>
              </div>
              <div className="stat-card">
                <h2>Study Streak</h2>
                <h1>3</h1>
                <p>Days in a row</p>
              </div>
              <div className="stat-card wide-element">
                <h2>Next Stage</h2>
                <h1>{nextStage}</h1>
              </div>
            </>
          )}
        </div>
      </>
    </div>
  );
}

export default Dashboard;
