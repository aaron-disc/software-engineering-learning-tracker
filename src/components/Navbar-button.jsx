import { useContext } from "react";

import pageContext from "../store/PageContext";

function NavbarButton({ title }) {
  const { content, setContent } = useContext(pageContext);

  return (
    <li>
      <button
        className="nav-button"
        style={{ border: content === title && "2px solid #213547" }}
        onClick={() => setContent(title)}
      >
        {title}
      </button>
    </li>
  );
}

export default NavbarButton;
