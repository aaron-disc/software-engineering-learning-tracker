import NavbarButton from "./Navbar-button";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>Software Engineering Learning Tracker </h1>
      <nav>
        <ul className="nav-items">
          <NavbarButton title="dashboard" />
          <NavbarButton title="pathways" />
          <NavbarButton title="profile" />
        </ul>
      </nav>
    </div>
  );
}
