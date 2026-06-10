export default function PortalSaved() {
  const savedOpportunities = [
    {
      title: "Junior Software Developer",
      type: "Job",
      company: "Tech Company",
      state: "Iowa",
    },
    {
      title: "Cybersecurity Apprentice",
      type: "Apprenticeship",
      company: "Security Company",
      state: "Tennessee",
    },
    {
      title: "Data Analytics Intern",
      type: "Internship",
      company: "Analytics Company",
      state: "Louisiana",
    },
  ];

  return (
    <div>
      <h1>Saved Opportunities</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Opportunity</th>
              <th>Type</th>
              <th>Company</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {savedOpportunities.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>{item.company}</td>
                <td>{item.state}</td>
                <td>
                  <button className="small-btn">
                    Apply
                  </button>

                  <button className="small-btn danger-btn">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}