export default function ApprenticeshipTable() {
  const apprenticeships = [
    {
      title: "Software Developer Apprentice",
      company: "Tech Partner",
      program: "Software Development with AI",
      workType: "Hybrid",
      state: "Iowa",
      status: "Published",
    },
    {
      title: "Cybersecurity Apprentice",
      company: "Security Partner",
      program: "Cybersecurity",
      workType: "Remote",
      state: "Tennessee",
      status: "Reviewed",
    },
  ];

  return (
    <div className="table-container">
      <h2>Managed Apprenticeships</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Program</th>
            <th>Work Type</th>
            <th>State</th>
            <th>Status</th>
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
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}