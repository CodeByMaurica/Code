export default function JobTable() {
  const jobs = [
    {
      title: "Junior Software Developer",
      company: "Tech Company",
      program: "Software Development with AI",
      level: "Entry Level",
      workType: "Remote",
      state: "Iowa",
      status: "Published",
    },
    {
      title: "SOC Analyst I",
      company: "Security Company",
      program: "Cybersecurity",
      level: "Entry Level",
      workType: "Hybrid",
      state: "Tennessee",
      status: "Reviewed",
    },
    {
      title: "Data Analyst",
      company: "Analytics Company",
      program: "Data Analytics",
      level: "Mid Level",
      workType: "Remote",
      state: "Louisiana",
      status: "Approved",
    },
  ];

  return (
    <div className="table-container">
      <h2>Managed Jobs</h2>

      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Program</th>
            <th>Level</th>
            <th>Work Type</th>
            <th>State</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.program}</td>
              <td>{job.level}</td>
              <td>{job.workType}</td>
              <td>{job.state}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}