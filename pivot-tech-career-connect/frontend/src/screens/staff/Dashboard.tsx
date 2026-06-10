export default function Dashboard() {
  return (
    <div>
      <h1>Career Services Operations Dashboard</h1>

      <div className="kpi-grid">
        <div className="kpi-card">
          <h3>New Jobs Found</h3>
          <p>78</p>
        </div>

        <div className="kpi-card">
          <h3>Published Jobs</h3>
          <p>42</p>
        </div>

        <div className="kpi-card">
          <h3>Apprenticeships</h3>
          <p>16</p>
        </div>

        <div className="kpi-card">
          <h3>Internships</h3>
          <p>21</p>
        </div>

        <div className="kpi-card">
          <h3>Alumni Contacted</h3>
          <p>45</p>
        </div>

        <div className="kpi-card">
          <h3>Need Support</h3>
          <p>5</p>
        </div>
      </div>

      <div className="table-container">
        <h2>Weekly Operations Snapshot</h2>

        <table>
          <thead>
            <tr>
              <th>Area</th>
              <th>Focus</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Job Openings Research</td>
              <td>Iowa, Tennessee, Louisiana, Indeed</td>
              <td>In Progress</td>
            </tr>

            <tr>
              <td>Industry Research</td>
              <td>Software Dev, Cybersecurity, Data Analytics</td>
              <td>Ready</td>
            </tr>

            <tr>
              <td>Alumni Outreach</td>
              <td>Check-ins, employment status, support needs</td>
              <td>In Progress</td>
            </tr>

            <tr>
              <td>Reports</td>
              <td>Weekly job report and alumni employment report</td>
              <td>Draft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}