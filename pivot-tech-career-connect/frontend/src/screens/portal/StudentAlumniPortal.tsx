import { useState } from "react";

import PortalSidebar from "../../components/layout/PortalSidebar";
import PortalHome from "./PortalHome";
import PortalJobs from "./PortalJobs";
import PortalApprenticeships from "./PortalApprenticeships";
import PortalInternships from "./PortalInternships";
import PortalResearch from "./PortalResearch";
import PortalResources from "./PortalResources";
import PortalProfile from "./PortalProfile";
import PortalSaved from "./PortalSaved";
import PortalApplications from "./PortalApplications";
import PortalSupport from "./PortalSupport";

export default function StudentAlumniPortal() {
  const [activePortalScreen, setActivePortalScreen] = useState("Portal Dashboard");

  return (
    <div className="portal-layout">
      <PortalSidebar
        activePortalScreen={activePortalScreen}
        setActivePortalScreen={setActivePortalScreen}
      />

      <main className="portal-main">
        {activePortalScreen === "Portal Dashboard" && <PortalHome />}
        {activePortalScreen === "Jobs" && <PortalJobs />}
        {activePortalScreen === "Apprenticeships" && <PortalApprenticeships />}
        {activePortalScreen === "Internships" && <PortalInternships />}
        {activePortalScreen === "Industry Research" && <PortalResearch />}
        {activePortalScreen === "Resources" && <PortalResources />}
        {activePortalScreen === "My Profile" && <PortalProfile />}
        {activePortalScreen === "Saved Opportunities" && <PortalSaved />}
        {activePortalScreen === "My Applications" && <PortalApplications />}
        {activePortalScreen === "Support Request" && <PortalSupport />}
      </main>
    </div>
  );
}