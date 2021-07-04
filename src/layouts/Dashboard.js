import SidebarMenu from "../components/Sidebar/Sidebar";
import Team from "../layouts/Team";
import Profile from "../layouts/Profile";
import StandUp from "./StandUp";
import React from "react";
import JiraDashboard from "./JiraDashboard/JIRA/JiraDashboard";

export default function Dashboard() {
  return (
    <>
      <SidebarMenu />
      <Profile />
      <StandUp />
      <Team />
      <JiraDashboard />
    </>
  );
}
