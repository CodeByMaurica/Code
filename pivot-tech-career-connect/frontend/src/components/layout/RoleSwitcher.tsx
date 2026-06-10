type RoleSwitcherProps = {
  role: string;
  setRole: (role: string) => void;
};

export default function RoleSwitcher({ role, setRole }: RoleSwitcherProps) {
  return (
    <div className="role-switcher">
      <label>Viewing as:</label>

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Admin">Admin</option>
        <option value="Research Team">Research Team</option>
        <option value="Alumni Outreach Team">Alumni Outreach Team</option>
        <option value="Student/Alumni User">Student/Alumni User</option>
      </select>
    </div>
  );
}