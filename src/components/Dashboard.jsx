import { useContext } from "react";

import pathwayData from "../data/DUMMY_DATA";

import PageContext from "../store/PageContext";
import PathwayContext from "../store/PathwayContext";
import PathwayDataContext from "../store/PathwayDataContext";

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
      <>
        <div className="stats-grid">
          <div className="stat-card first-column">
            <h1>Current pathway</h1>
            <h2>
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
            </h2>
          </div>
          <div className="stat-card wide-element">
            <h2>Achievements</h2>
            {achievements.length > 0 ? (
              <ul>
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            ) : (
              <p>No achievements yet. Keep going!</p>
            )}
          </div>
          <div className="stat-card tall-element">
            <h2>Module Progress</h2>
            <h1>{moduleProgress}%</h1>
            <p></p>
          </div>
          <div className="stat-card">
            <h2>Next Stage</h2>
            <p>{nextStage}</p>
            <p>
              {pathway
                ? nextStage !== "All stages completed" &&
                  pathway.replace(/_/g, " ")
                : "some text"}
            </p>
          </div>

          <div className="stat-card">
            <h2>streak or smth</h2> <p>3</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;

