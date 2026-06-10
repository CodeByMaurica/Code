import "../Sidebar.css";

type SidebarProps = {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  role: string;
};

export default function Sidebar({
  activeScreen,
  setActiveScreen,
  role,
}: SidebarProps) {
  const adminMenu = [
  "Dashboard",
  "Admin Approvals",
  "Industry Research",
  "Job Exploration",
  "Alumni Success",
  "Outreach",
  "Outcomes",
  "Reports",
];

  const researchMenu = [
    "Dashboard",
    "Industry Research",
    "Job Exploration",
    "Reports",
  ];

  const alumniMenu = [
    "Dashboard",
    "Alumni Success",
    "Outreach",
    "Outcomes",
    "Reports",
  ];

  let menuItems = adminMenu;

  if (role === "Research Team") {
    menuItems = researchMenu;
  }

  if (role === "Alumni Outreach Team") {
    menuItems = alumniMenu;
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Pivot Tech</h2>
        <p>Career Connect</p>
        <span>{role}</span>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item}
            className={activeScreen === item ? "nav-item active" : "nav-item"}
            onClick={() => setActiveScreen(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}