import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  async function handleLogin() {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Login successful!");
      navigate("/home");
    } else {
      alert(data.error);
    }
  }

  async function handleRegister() {
    if (registerPassword.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        username: email,
        password: registerPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Account created! Please login.");
      setActiveTab("login");
      setLoginUsername(email);
      setLoginPassword("");
    } else {
      alert(data.error);
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <div className="logo-circle">LTM</div>
          <h1>LTM Movie Studio</h1>
          <p>Luxury Streaming Experience</p>
        </div>

        <div className="auth-tabs">
          <button
            className={activeTab === "login" ? "active-tab" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "register" ? "active-tab" : ""}
            onClick={() => setActiveTab("register")}
          >
            Create Account
          </button>
        </div>

        {activeTab === "login" && (
          <>
            <input
              type="text"
              placeholder="Email or Username"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button className="login-submit" onClick={handleLogin}>
              Login
            </button>
          </>
        )}

        {activeTab === "register" && (
          <>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create Password - 8 characters minimum"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <button className="create-btn" onClick={handleRegister}>
              Create Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}