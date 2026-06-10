export default function Reports() {
  const reports = [
    {
      name: "Weekly Job Openings Report",
      audience: "Students & Alumni",
      status: "Ready",
      purpose: "Share current jobs from Iowa, Tennessee, Louisiana, Indeed, and company career pages.",
    },
    {
      name: "Weekly Industry Research Brief",
      audience: "Students & Instructors",
      status: "Ready",
      purpose: "Summarize trends, tools, certifications, AI applications, and learning resources.",
    },
    {
      name: "Alumni Employment Report",
      audience: "Career Services / Leadership",
      status: "Draft",
      purpose: "Track employment status, job searching alumni, support needs, and mentorship interest.",
    },
  ];

  return (
    <div>
      <h1>Reports Center</h1>

      <div className="table-container">
        <h2>Weekly & Monthly Reports</h2>

        <table>
          <thead>
            <tr>
              <th>Report</th>
              <th>Audience</th>
              <th>Status</th>
              <th>Purpose</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.name}</td>
                <td>{report.audience}</td>
                <td>{report.status}</td>
                <td>{report.purpose}</td>
                <td>
                  <button className="small-btn">Preview</button>
                  <button className="small-btn">Export</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}