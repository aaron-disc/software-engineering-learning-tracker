import { createContext, useState } from "react";

const PathwayContext = createContext();

export function PathwayProvider({ children }) {
  const [pathway, setPathway] = useState();

  return (
    <PathwayContext.Provider value={{ pathway, setPathway }}>
      {children}
    </PathwayContext.Provider>
  );
}

export default PathwayContext;
