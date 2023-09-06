import React from "react";
import NavDashboard from "../Components/NavDashboard";
import ListUsers from "../Components/ListUsers";

function DashBoard() {
  return (
    <div className="w-screen h-screen">
      <NavDashboard />
      <ListUsers />
    </div>
  );
}

export default DashBoard;
