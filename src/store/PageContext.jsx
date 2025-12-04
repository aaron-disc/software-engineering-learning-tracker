import { createContext, useState } from "react";

const PageContext = createContext();

export function PageProvider({ children }) {
  const [content, setContent] = useState("Pathways");

  return (
    <PageContext.Provider value={{ content, setContent }}>
      {children}
    </PageContext.Provider>
  );
}

export default PageContext;
