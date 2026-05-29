import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();

  // Switches between Login form and Register form
  const [isRegister, setIsRegister] = useState(false);

  // Form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Only used on Register form
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Only check confirm password if user is registering
    if (isRegister && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Mark user as logged in
    setIsLoggedIn(true);

    // Send user to Home page
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">LTM Task Manager</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{isRegister ? "Create Account" : "Login"}</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isRegister && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button type="submit">{isRegister ? "Register" : "Login"}</button>

          <p>
            {isRegister ? "Already have an account?" : "Need an account?"}{" "}
            <span onClick={() => setIsRegister(!isRegister)}>
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;