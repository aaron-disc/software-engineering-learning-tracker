import NavbarButton from "./Navbar-button";

function Navbar() {
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

export default Navbar;
