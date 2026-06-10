import { useState } from "react";

import Login from "./screens/auth/Login";

import Sidebar from "./components/layout/Sidebar";
import PortalSidebar from "./components/layout/PortalSidebar";
import Header from "./components/layout/Header";

import Dashboard from "./screens/staff/Dashboard";
import AdminApprovals from "./screens/staff/AdminApprovals";
import IndustryResearch from "./screens/staff/IndustryResearch";
import JobExploration from "./screens/staff/JobExploration";
import AlumniSuccess from "./screens/staff/AlumniSuccess";
import Outreach from "./screens/staff/Outreach";
import Outcomes from "./screens/staff/Outcomes";
import Reports from "./screens/staff/Reports";

import PortalHome from "./screens/portal/PortalHome";
import PortalJobs from "./screens/portal/PortalJobs";
import PortalResources from "./screens/portal/PortalResources";
import PortalApprenticeships from "./screens/portal/PortalApprenticeships";
import PortalInternships from "./screens/portal/PortalInternships";
import PortalResearch from "./screens/portal/PortalResearch";
import PortalSaved from "./screens/portal/PortalSaved";
import PortalApplications from "./screens/portal/PortalApplications";
import PortalSupport from "./screens/portal/PortalSupport";
import PortalProfile from "./screens/portal/PortalProfile";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState("Dashboard");
  const [activePortalScreen, setActivePortalScreen] =
    useState("Portal Dashboard");
  const [role, setRole] = useState("Student/Alumni User");

  const isPortalUser = role === "Student/Alumni User";

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />;
  }

  return (
    <div className="app-layout">
      {!isPortalUser ? (
        <Sidebar
          activeScreen={activeScreen}
          setActiveScreen={setActiveScreen}
          role={role}
        />
      ) : (
        <PortalSidebar
          activePortalScreen={activePortalScreen}
          setActivePortalScreen={setActivePortalScreen}
        />
      )}

      <main className="main-content">
        <Header role={role} setIsLoggedIn={setIsLoggedIn} />

        {!isPortalUser && activeScreen === "Dashboard" && <Dashboard />}
        {!isPortalUser && activeScreen === "Admin Approvals" && (
          <AdminApprovals />
        )}
        {!isPortalUser && activeScreen === "Industry Research" && (
          <IndustryResearch />
        )}
        {!isPortalUser && activeScreen === "Job Exploration" && (
          <JobExploration />
        )}
        {!isPortalUser && activeScreen === "Alumni Success" && (
          <AlumniSuccess />
        )}
        {!isPortalUser && activeScreen === "Outreach" && <Outreach />}
        {!isPortalUser && activeScreen === "Outcomes" && <Outcomes />}
        {!isPortalUser && activeScreen === "Reports" && <Reports />}

        {isPortalUser && activePortalScreen === "Portal Dashboard" && (
          <PortalHome />
        )}
        {isPortalUser && activePortalScreen === "Jobs" && <PortalJobs />}
        {isPortalUser && activePortalScreen === "Apprenticeships" && (
          <PortalApprenticeships />
        )}
        {isPortalUser && activePortalScreen === "Internships" && (
          <PortalInternships />
        )}
        {isPortalUser && activePortalScreen === "Industry Research" && (
          <PortalResearch />
        )}
        {isPortalUser && activePortalScreen === "Resources" && (
          <PortalResources />
        )}
        {isPortalUser && activePortalScreen === "My Profile" && (
          <PortalProfile />
        )}
        {isPortalUser && activePortalScreen === "Saved Opportunities" && (
          <PortalSaved />
        )}
        {isPortalUser && activePortalScreen === "My Applications" && (
          <PortalApplications />
        )}
        {isPortalUser && activePortalScreen === "Support Request" && (
          <PortalSupport />
        )}
      </main>
    </div>
  );
}