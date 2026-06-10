type HeaderProps = {
  role: string;
  setIsLoggedIn: (value: boolean) => void;
};

export default function Header({ role, setIsLoggedIn }: HeaderProps) {
  return (
    <header className="top-header">
      <div>
        <h2>Pivot Tech Career Connect</h2>
        <p>{role} Portal</p>
      </div>

      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </header>
  );
}