import { createContext } from "react";

const PathwayDataContext = createContext({
  pathwayData: {},
  setPathwayData: () => {},
});

export default PathwayDataContext;
