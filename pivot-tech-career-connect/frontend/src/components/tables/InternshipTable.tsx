export default function InternshipTable() {
  const internships = [
    {
      title: "Software Development Intern",
      company: "Tech Company",
      program: "Software Development with AI",
      term: "Summer",
      status: "Published",
    },
    {
      title: "Cybersecurity Intern",
      company: "Security Company",
      program: "Cybersecurity",
      term: "Fall",
      status: "Reviewed",
    },
  ];

  return (
    <div className="table-container">
      <h2>Managed Internships</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Program</th>
            <th>Term</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {internships.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.company}</td>
              <td>{item.program}</td>
              <td>{item.term}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}