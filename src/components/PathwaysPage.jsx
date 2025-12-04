import { useContext } from "react";

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
    <div className="page-layout">
      <aside className="sidebar">
        <h2>Choose Your Pathway</h2>
        <ul className="pathway-list">
          {dummyPathways.map((pway, index) => (
            <li key={index}>
              <button
                className={`sidebar-button ${
                  pway.title.replace(/ /g, "_") === pathway ? "selected" : ""
                }`}
                onClick={() => setPathway(pway.title.replace(/ /g, "_"))}
              >
                <h2>{pway.title}</h2>
                <p>{pway.description}</p>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <main className="main-content">
        {pathway ? (
          <Pathway selectedPathway={pathway} />
        ) : (
          <p>Please select a pathway from the sidebar.</p>
        )}
      </main>
    </div>
  );
}

export default PathwaysPage;
