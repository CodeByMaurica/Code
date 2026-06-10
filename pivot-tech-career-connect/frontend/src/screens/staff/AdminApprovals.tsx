export default function AdminApprovals() {
  const pendingUsers = [
    {
      name: "Jordan Smith",
      accountType: "Alumni",
      program: "Cybersecurity",
      requestedRole: "Mentor",
      status: "Pending",
    },
    {
      name: "Taylor Johnson",
      accountType: "Student",
      program: "Data Analytics",
      requestedRole: "Student",
      status: "Pending",
    },
    {
      name: "Morgan Lee",
      accountType: "Alumni",
      program: "Software Development with AI",
      requestedRole: "Guest Speaker",
      status: "Pending",
    },
  ];

  return (
    <div>
      <h1>Admin Approvals</h1>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Account Type</th>
              <th>Program</th>
              <th>Portal Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pendingUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.accountType}</td>
                <td>{user.program}</td>
                <td>{user.requestedRole}</td>
                <td>{user.status}</td>
                <td>
                  <button className="small-btn">Approve</button>
                  <button className="small-btn danger-btn">Deny</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}