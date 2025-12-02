import { createContext } from "react";

const PathwayContext = createContext({
  pathway: "",
  setPathway: () => {},
});

export default PathwayContext;
