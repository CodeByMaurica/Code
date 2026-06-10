import { useState } from "react";

import AddJobForm from "../../components/forms/AddJobForm";
import AddApprenticeshipForm from "../../components/forms/AddApprenticeshipForm";
import AddInternshipForm from "../../components/forms/AddInternshipForm";

import JobFilters from "../../components/filters/JobFilters";

import JobTable from "../../components/tables/JobTable";
import ApprenticeshipTable from "../../components/tables/ApprenticeshipTable";
import InternshipTable from "../../components/tables/InternshipTable";

export default function JobExploration() {
  const [activeTab, setActiveTab] = useState("Jobs");

  return (
    <div>
      <h1>Job Management Center</h1>

      <p>
        Research Team can add, review, approve, and publish jobs for students
        and alumni.
      </p>

      <div className="tab-bar">
        <button
          className={activeTab === "Jobs" ? "tab-btn active-tab" : "tab-btn"}
          onClick={() => setActiveTab("Jobs")}
        >
          Jobs
        </button>

        <button
          className={
            activeTab === "Apprenticeships" ? "tab-btn active-tab" : "tab-btn"
          }
          onClick={() => setActiveTab("Apprenticeships")}
        >
          Apprenticeships
        </button>

        <button
          className={
            activeTab === "Internships" ? "tab-btn active-tab" : "tab-btn"
          }
          onClick={() => setActiveTab("Internships")}
        >
          Internships
        </button>
      </div>

      {activeTab === "Jobs" && (
        <>
          <AddJobForm />
          <JobFilters />
          <JobTable />
        </>
      )}

      {activeTab === "Apprenticeships" && (
        <>
          <AddApprenticeshipForm />
          <ApprenticeshipTable />
        </>
      )}

      {activeTab === "Internships" && (
        <>
          <AddInternshipForm />
          <InternshipTable />
        </>
      )}

      <div className="form-card">
        <h2>Opportunity Pipeline</h2>

        <div className="kpi-grid">
          <div className="kpi-card">
            <h3>Found</h3>
            <p>24</p>
          </div>

          <div className="kpi-card">
            <h3>Reviewed</h3>
            <p>18</p>
          </div>

          <div className="kpi-card">
            <h3>Approved</h3>
            <p>12</p>
          </div>

          <div className="kpi-card">
            <h3>Published</h3>
            <p>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}