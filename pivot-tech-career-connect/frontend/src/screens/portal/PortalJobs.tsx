export default function PortalJobs() {
  const publishedJobs = [
    {
      title: "Junior Software Developer",
      company: "Tech Company",
      program: "Software Development with AI",
      level: "Entry Level",
      workType: "Remote",
      employmentType: "Full-Time",
      state: "Iowa",
    },
    {
      title: "SOC Analyst I",
      company: "Security Company",
      program: "Cybersecurity",
      level: "Entry Level",
      workType: "Hybrid",
      employmentType: "Full-Time",
      state: "Tennessee",
    },
    {
      title: "Data Analyst",
      company: "Analytics Company",
      program: "Data Analytics",
      level: "Mid Level",
      workType: "Remote",
      employmentType: "Contract",
      state: "Louisiana",
    },
  ];

  return (
    <div>
      <h1>Jobs</h1>

      <div className="filter-card">
        <h2>Find Jobs</h2>

        <div className="filter-grid">
          <select>
            <option>All Programs</option>
            <option>Software Development with AI</option>
            <option>Cybersecurity</option>
            <option>Data Analytics</option>
          </select>

          <select>
            <option>All Levels</option>
            <option>Entry Level</option>
            <option>Mid Level</option>
            <option>Senior Level</option>
          </select>

          <select>
            <option>All Work Types</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
          </select>

          <select>
            <option>All Employment Types</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Contract</option>
          </select>

          <select>
            <option>All States</option>
            <option>Iowa</option>
            <option>Tennessee</option>
            <option>Louisiana</option>
            <option>Nationwide</option>
          </select>
        </div>
      </div>

      <div className="table-container">
        <h2>Published Jobs</h2>

        <table>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Company</th>
              <th>Program</th>
              <th>Level</th>
              <th>Work Type</th>
              <th>Employment</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {publishedJobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.program}</td>
                <td>{job.level}</td>
                <td>{job.workType}</td>
                <td>{job.employmentType}</td>
                <td>{job.state}</td>
                <td>
                  <button className="small-btn">Save</button>
                  <button className="small-btn">Applied</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}