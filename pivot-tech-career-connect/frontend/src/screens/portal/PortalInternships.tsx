export default function PortalInternships() {
  const internships = [
    {
      title: "Software Development Intern",
      company: "Tech Company",
      program: "Software Development with AI",
      term: "Summer",
      workType: "Remote",
      state: "Iowa",
    },
    {
      title: "Cybersecurity Intern",
      company: "Security Company",
      program: "Cybersecurity",
      term: "Fall",
      workType: "Hybrid",
      state: "Tennessee",
    },
    {
      title: "Data Analytics Intern",
      company: "Analytics Company",
      program: "Data Analytics",
      term: "Spring",
      workType: "Onsite",
      state: "Louisiana",
    },
  ];

  return (
    <div>
      <h1>Internships</h1>

      <div className="filter-card">
        <h2>Find Internships</h2>

        <div className="filter-grid">
          <select>
            <option>All Programs</option>
            <option>Software Development with AI</option>
            <option>Cybersecurity</option>
            <option>Data Analytics</option>
          </select>

          <select>
            <option>All Terms</option>
            <option>Spring</option>
            <option>Summer</option>
            <option>Fall</option>
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
          </select>
        </div>
      </div>

      <div className="table-container">
        <h2>Available Internships</h2>

        <table>
          <thead>
            <tr>
              <th>Internship</th>
              <th>Company</th>
              <th>Program</th>
              <th>Term</th>
              <th>Work Type</th>
              <th>State</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {internships.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>{item.company}</td>
                <td>{item.program}</td>
                <td>{item.term}</td>
                <td>{item.workType}</td>
                <td>{item.state}</td>
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