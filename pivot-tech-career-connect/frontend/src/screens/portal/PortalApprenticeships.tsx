export default function PortalApprenticeships() {
  const apprenticeships = [
    {
      title: "Software Developer Apprentice",
      company: "Tech Apprenticeship Partner",
      program: "Software Development with AI",
      workType: "Hybrid",
      state: "Iowa",
      paid: "Paid",
    },
    {
      title: "Cybersecurity Apprentice",
      company: "Security Apprenticeship Partner",
      program: "Cybersecurity",
      workType: "Remote",
      state: "Tennessee",
      paid: "Paid",
    },
    {
      title: "Data Analytics Apprentice",
      company: "Analytics Apprenticeship Partner",
      program: "Data Analytics",
      workType: "Onsite",
      state: "Louisiana",
      paid: "Paid",
    },
  ];

  return (
    <div>
      <h1>Apprenticeships</h1>

      <div className="filter-card">
        <h2>Find Apprenticeships</h2>

        <div className="filter-grid">
          <select>
            <option>All Programs</option>
            <option>Software Development with AI</option>
            <option>Cybersecurity</option>
            <option>Data Analytics</option>
          </select>

          <select>
            <option>All Work Types</option>
            <option>Remote</option>
            <option>Hybrid</option>
            <option>Onsite</option>
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
        <h2>Available Apprenticeships</h2>

        <table>
          <thead>
            <tr>
              <th>Apprenticeship</th>
              <th>Company</th>
              <th>Program</th>
              <th>Work Type</th>
              <th>State</th>
              <th>Paid</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {apprenticeships.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.company}</td>
                <td>{item.program}</td>
                <td>{item.workType}</td>
                <td>{item.state}</td>
                <td>{item.paid}</td>
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