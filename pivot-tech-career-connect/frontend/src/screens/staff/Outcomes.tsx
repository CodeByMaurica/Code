export default function Outcomes() {
  const programOutcomes = [
    {
      program: "Cybersecurity",
      placement: "82%",
      employed: 18,
      seeking: 4,
      avgTime: "3.2 months",
    },
    {
      program: "Data Analytics",
      placement: "76%",
      employed: 15,
      seeking: 5,
      avgTime: "3.8 months",
    },
    {
      program: "Software Development with AI",
      placement: "79%",
      employed: 20,
      seeking: 6,
      avgTime: "3.5 months",
    },
  ];

  return (
    <div>
      <h1>Employment Outcomes</h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <h3>Overall Placement</h3>
          <p>79%</p>
        </div>

        <div className="kpi-card">
          <h3>Total Employed</h3>
          <p>53</p>
        </div>

        <div className="kpi-card">
          <h3>Seeking Work</h3>
          <p>15</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Program Outcomes</h2>

        <table>
          <thead>
            <tr>
              <th>Program</th>
              <th>Placement Rate</th>
              <th>Employed</th>
              <th>Seeking</th>
              <th>Average Time to Employment</th>
            </tr>
          </thead>

          <tbody>
            {programOutcomes.map((item, index) => (
              <tr key={index}>
                <td>{item.program}</td>
                <td>{item.placement}</td>
                <td>{item.employed}</td>
                <td>{item.seeking}</td>
                <td>{item.avgTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}