import { useState } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import PageContext from "./store/PageContext";
import PathwayContext from "./store/PathwayContext";
import PathwayDataContext from "./store/PathwayDataContext";
import PathwaysPage from "./components/PathwaysPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  const [page, setPage] = useState("Pathways");
  const [pathway, setPathway] = useState();
  const [pathwayArrData, setPathwayArrData] = useState({
    Backend_Developer: [],
    Frontend_Developer: [],
    DevOps_Engineer: [],
    Full_Stack_Developer: [],
  });

  function handleSetPathwayArrData(index) {
    const currentState = pathwayArrData[pathway];
    const updatedState = currentState.includes(index)
      ? currentState.filter((i) => i !== index)
      : [...currentState, index].sort((a, b) => a - b);

    setPathwayArrData((prev) => {
      return {
        ...prev,
        [pathway]: updatedState,
      };
    });
  }

  return (
    <PathwayDataContext.Provider
      value={{
        pathwayArrData,
        setPathwayArrData: handleSetPathwayArrData,
      }}
    >
      <PathwayContext.Provider value={{ pathway, setPathway }}>
        <PageContext.Provider value={{ content: page, setContent: setPage }}>
          <div className="">
            <Navbar />
          </div>
          <div className="main">
            {(page === "Dashboard" && <Dashboard />) ||
              (page === "Pathways" && <PathwaysPage />) ||
              (page === "Profile" && <Profile />)}
          </div>
        </PageContext.Provider>
      </PathwayContext.Provider>
    </PathwayDataContext.Provider>
  );
}

export default App;
