import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsLoggedIn }: LoginProps) {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const endpoint = isRegister
      ? "http://localhost:5000/register"
      : "http://localhost:5000/login";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      alert(data.message);

      if (!response.ok) {
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      setIsLoggedIn(true);

      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("Could not connect to server");
    }
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

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>

          <p className="auth-switch">
            {isRegister
              ? "Already have an account?"
              : "Need an account?"}{" "}
            <span
              onClick={() => {
                setIsRegister(!isRegister);
                setEmail("");
                setPassword("");
                setConfirmPassword("");
              }}
              style={{
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;