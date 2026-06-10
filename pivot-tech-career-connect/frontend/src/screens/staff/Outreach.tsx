export default function Outreach() {
  const outreachRecords = [
    {
      name: "Taylor Johnson",
      contactType: "Email",
      status: "Follow-Up Needed",
      supportNeed: "Resume Assistance",
      lastContact: "2026-06-10",
    },
    {
      name: "Jordan Smith",
      contactType: "Call",
      status: "Completed",
      supportNeed: "Mentorship Interest",
      lastContact: "2026-06-09",
    },
    {
      name: "Morgan Lee",
      contactType: "Email",
      status: "Escalated",
      supportNeed: "Interview Coaching",
      lastContact: "2026-06-08",
    },
  ];

  return (
    <div>
      <h1>Outreach Management</h1>

      <div className="form-card">
        <h2>Log Alumni Outreach</h2>

        <div className="form-grid">
          <input type="text" placeholder="Alumni Name" />

          <select>
            <option value="">Contact Type</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="Text">Text</option>
          </select>

          <input type="date" />

          <select>
            <option value="">Outcome</option>
            <option value="Completed">Completed</option>
            <option value="No Answer">No Answer</option>
            <option value="Follow-Up Needed">Follow-Up Needed</option>
            <option value="Escalated">Escalated</option>
          </select>

          <select>
            <option value="">Support Need</option>
            <option value="Resume Assistance">Resume Assistance</option>
            <option value="Interview Coaching">Interview Coaching</option>
            <option value="Job Referral">Job Referral</option>
            <option value="Mentorship Interest">Mentorship Interest</option>
            <option value="Guest Speaker Interest">Guest Speaker Interest</option>
          </select>

          <select>
            <option value="">Needs Support?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <textarea placeholder="Outreach notes"></textarea>

        <button className="primary-btn">Save Outreach Note</button>
      </div>

      <div className="table-container">
        <h2>Recent Outreach</h2>

        <table>
          <thead>
            <tr>
              <th>Alumni</th>
              <th>Contact Type</th>
              <th>Status</th>
              <th>Support Need</th>
              <th>Last Contact</th>
            </tr>
          </thead>

          <tbody>
            {outreachRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.contactType}</td>
                <td>{record.status}</td>
                <td>{record.supportNeed}</td>
                <td>{record.lastContact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}