import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">LTM Task Manager</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <h2>{isRegister ? "Create Account" : "Login"}</h2>

          <input type="email" placeholder="Email" required />

          <input type="password" placeholder="Password" required />

          {isRegister && (
            <input type="password" placeholder="Confirm Password" required />
          )}

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>

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