import { useContext } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import PathwaysPage from "./components/PathwaysPage";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

import { PageProvider } from "./store/PageContext";
import PageContext from "./store/PageContext";
import { PathwayProvider } from "./store/PathwayContext";
import { PathwayDataProvider } from "./store/PathwayDataContext";

function AppContent() {
  const { content } = useContext(PageContext);

  return (
    <div className="main">
      {(content === "Dashboard" && <Dashboard />) ||
        (content === "Pathways" && <PathwaysPage />) ||
        (content === "Profile" && <Profile />)}
    </div>
  );
}

function App() {
  return (
    <PathwayDataProvider>
      <PathwayProvider>
        <PageProvider>
          <Navbar />
          <AppContent />
        </PageProvider>
      </PathwayProvider>
    </PathwayDataProvider>
  );
}

export default App;
