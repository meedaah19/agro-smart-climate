// src/context/DashboardContext.js
import { createContext, useState, useContext } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [refreshDashboard, setRefreshDashboard] = useState(false);

  const triggerDashboardRefresh = () => {
    setRefreshDashboard((prev) => !prev);
  };

  return (
    <DashboardContext.Provider value={{ refreshDashboard, triggerDashboardRefresh }}>
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => useContext(DashboardContext);
