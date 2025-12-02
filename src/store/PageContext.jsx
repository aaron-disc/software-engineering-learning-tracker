import { createContext } from "react";

const PageContext = createContext({
  content: "main",
  setContent: () => {},
});

export default PageContext;