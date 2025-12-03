import { useContext, useState } from "react";

import PathwayContext from "../store/PathwayContext";
import Pathway from "./Pathway";

const dummyPathways = [
  {
    title: "Frontend Developer",
    description:
      "Master HTML, CSS, JavaScript, and modern frameworks such as React.",
  },
  {
    title: "Backend Developer",
    description:
      "Learn server-side programming, databases, APIs, and system architecture.",
  },
  {
    title: "DevOps Engineer",
    description:
      "Explore CI/CD, cloud infrastructure, containerization, and monitoring tools.",
  },
  {
    title: "Full Stack Developer",
    description:
      "Combine frontend and backend skills to build complete web applications.",
  },
];

function PathwaysPage() {
  const { setPathway, pathway } = useContext(PathwayContext);

  return (
    <div className="page">
      <div className="pathway-card">
        {pathway && <Pathway selectedPathway={pathway} />}
      </div>
      <div>
        <header className="header">
          <h1>Choose Your Learning Pathway</h1>
        </header>
        <div className="pathway-grid">
          {dummyPathways.map((pway, index) => (
            <div key={index} className="pathway-card">
              <h2>{pway.title}</h2>
              <p>{pway.description}</p>
              <button
                className={`view-pathway-button ${
                  pway.title.replace(/ /g, "_") === pathway
                    ? "selected"
                    : "none"
                }`}
                onClick={() => setPathway(pway.title.replace(/ /g, "_"))}
              >
                Select Pathway
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PathwaysPage;
