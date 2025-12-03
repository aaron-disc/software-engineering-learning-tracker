import NavbarButton from "./Navbar-button";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Software Engineering Learning Tracker </h1>
      <nav>
        <ul className="nav-items">
          <NavbarButton title="Dashboard" />
          <NavbarButton title="Pathways" />
          <NavbarButton title="Profile" />
        </ul>
      </nav>
    </div>
  );
}
/*
    <div className="page" style={{ padding: "2rem 5rem" }}>
        <>
          <header className="dashboard-header">
            <p>Here's your current learning progress and goals.</p>
          </header>
          <section className="current-pathway">
            <h2>Current Pathway</h2>
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
    </div>
*/
