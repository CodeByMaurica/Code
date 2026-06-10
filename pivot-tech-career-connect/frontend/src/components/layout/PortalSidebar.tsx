type PortalSidebarProps = {
  activePortalScreen: string;
  setActivePortalScreen: (screen: string) => void;
};

export default function PortalSidebar({
  activePortalScreen,
  setActivePortalScreen,
}: PortalSidebarProps) {
  const portalMenu = [
  "Portal Dashboard",
  "Jobs",
  "Apprenticeships",
  "Internships",
  "Industry Research",
  "Resources",
  "My Profile",
  "Saved Opportunities",
  "My Applications",
  "Support Request",
];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Pivot Tech</h2>
        <p>Student & Alumni Portal</p>
      </div>

      <nav className="sidebar-nav">
        {portalMenu.map((item) => (
          <button
            key={item}
            className={activePortalScreen === item ? "nav-item active" : "nav-item"}
            onClick={() => setActivePortalScreen(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}