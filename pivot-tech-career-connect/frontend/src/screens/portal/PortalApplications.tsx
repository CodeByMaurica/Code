export default function PortalApplications() {
  const applications = [
    {
      title: "Junior Software Developer",
      type: "Job",
      company: "Tech Company",
      status: "Applied",
      date: "2026-06-10",
    },
    {
      title: "Cybersecurity Apprentice",
      type: "Apprenticeship",
      company: "Security Company",
      status: "Interviewing",
      date: "2026-06-08",
    },
    {
      title: "Data Analytics Intern",
      type: "Internship",
      company: "Analytics Company",
      status: "Saved",
      date: "2026-06-06",
    },
  ];

  return (
    <div>
      <h1>My Applications</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Opportunity</th>
              <th>Type</th>
              <th>Company</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.company}</td>
                <td>{item.status}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}