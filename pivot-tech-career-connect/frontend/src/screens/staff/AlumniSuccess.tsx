export default function AlumniSuccess() {
  const alumni = [
    {
      name: "Jordan Smith",
      program: "Cybersecurity",
      status: "Employed",
      jobTitle: "SOC Analyst I",
      company: "Security Company",
      support: "No",
      mentor: "Yes",
    },
    {
      name: "Taylor Johnson",
      program: "Data Analytics",
      status: "Seeking Employment",
      jobTitle: "N/A",
      company: "N/A",
      support: "Yes",
      mentor: "No",
    },
    {
      name: "Morgan Lee",
      program: "Software Development with AI",
      status: "Career Advancement",
      jobTitle: "Junior Developer",
      company: "Tech Company",
      support: "No",
      mentor: "Yes",
    },
  ];

  return (
    <div>
      <h1>Alumni Success Center</h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <h3>Alumni Contacted</h3>
          <p>45</p>
        </div>

        <div className="kpi-card">
          <h3>Employed</h3>
          <p>18</p>
        </div>

        <div className="kpi-card">
          <h3>Seeking Work</h3>
          <p>7</p>
        </div>

        <div className="kpi-card">
          <h3>Need Support</h3>
          <p>5</p>
        </div>

        <div className="kpi-card">
          <h3>Potential Mentors</h3>
          <p>11</p>
        </div>

        <div className="kpi-card">
          <h3>Guest Speakers</h3>
          <p>6</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Alumni Directory</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Program</th>
              <th>Status</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Needs Support</th>
              <th>Mentor Interest</th>
            </tr>
          </thead>

          <tbody>
            {alumni.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.program}</td>
                <td>{person.status}</td>
                <td>{person.jobTitle}</td>
                <td>{person.company}</td>
                <td>{person.support}</td>
                <td>{person.mentor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}