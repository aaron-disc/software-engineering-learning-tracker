import { createContext, useState } from "react";
import pathwayData from "../data/DUMMY_DATA";

const PathwayDataContext = createContext();

export function PathwayDataProvider({ children }) {
  const [pathwayArrData, setPathwayArrData] = useState({
    Backend_Developer: [],
    Frontend_Developer: [],
    DevOps_Engineer: [],
    Full_Stack_Developer: [],
  });

  const [achievements, setAchievements] = useState([]);

  function handleSetPathwayArrData(pathway, index, stageTitle) {
    const currentState = pathwayArrData[pathway];
    const updatedState = currentState.includes(index)
      ? currentState.filter((i) => i !== index)
      : [...currentState, index].sort((a, b) => a - b);

    setPathwayArrData((prev) => ({
      ...prev,
      [pathway]: updatedState,
    }));

    if (!currentState.includes(index)) {
      setAchievements((prev) => {
        const newAchievements = [
          `Completed - ${stageTitle} in  ${pathway.replace(/_/g, " ")}`,
          ...prev,
        ];
        return newAchievements.slice(0, 3);
      });
    } else {
      setAchievements((prev) =>
        prev.filter(
          (ach) =>
            ach !==
            `Completed stage: ${stageTitle} in ${pathway.replace(/_/g, " ")}`
        )
      );
    }

    const totalStages = pathwayData[pathway].length;
    if (updatedState.length === totalStages) {
      setAchievements((prev) => {
        const newAchievements = [
          `Completed the entire ${pathway.replace(/_/g, " ")} pathway!`,
          ...prev,
        ];
        return newAchievements.slice(0, 3);
      });
    }
  }

  return (
    <PathwayDataContext.Provider
      value={{
        pathwayArrData,
        setPathwayArrData: handleSetPathwayArrData,
        achievements,
      }}
    >
      {children}
    </PathwayDataContext.Provider>
  );
}

export default PathwayDataContext;
