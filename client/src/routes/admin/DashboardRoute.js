import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/admin/dashboard";

const DashboardRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default DashboardRoute;
