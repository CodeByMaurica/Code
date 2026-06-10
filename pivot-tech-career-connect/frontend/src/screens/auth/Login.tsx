import { useState } from "react";

// Props passed from App.tsx
type LoginProps = {
  setIsLoggedIn: (value: boolean) => void;
  setRole: (role: string) => void;
};

export default function Login({
  setIsLoggedIn,
  setRole,
}: LoginProps) {

  // Controls which screen is displayed
  const [loginType, setLoginType] = useState<
    "choice" | "employee" | "student" | "register"
  >("choice");

  // ==========================================
  // Employee Login Handler
  // ==========================================
  // Later this will connect to the backend.
  // Backend will determine if the employee is:
  // - Admin
  // - Research Team
  // - Alumni Outreach Team
  function handleEmployeeLogin() {
  setRole("Admin");
  setIsLoggedIn(true);
}

  // ==========================================
  // Student/Alumni Login Handler
  // ==========================================
  // Later backend will:
  // 1. Verify email/password
  // 2. Check approval status
  // 3. Allow login if approved
  function handleStudentLogin() {
    setRole("Student/Alumni User");
    setIsLoggedIn(true);
  }

  // ==========================================
  // EMPLOYEE LOGIN SCREEN
  // ==========================================
  if (loginType === "employee") {
    return (
      <div className="login-page">
        <div className="login-card">

          <h1>Employee Login</h1>

          {/* Employee Email */}
          <input
            type="email"
            placeholder="Employee Email"
          />

          {/* Employee Password */}
          <input
            type="password"
            placeholder="Password"
          />

          {/* Login Button */}
          <button onClick={handleEmployeeLogin}>
            Login
          </button>

          {/* Back Button */}
          <button
            className="secondary-btn"
            onClick={() => setLoginType("choice")}
          >
            Back
          </button>

        </div>
      </div>
    );
  }

  // ==========================================
  // STUDENT / ALUMNI REGISTRATION SCREEN
  // ==========================================
  if (loginType === "register") {
    return (
      <div className="login-page">
        <div className="login-card">

         <h1>Student / Alumni Register</h1>

{/* Account Type */}
<select>
  <option value="">Select Account Type</option>
  <option value="Student">Student</option>
  <option value="Alumni">Alumni</option>
</select>

{/* Full Name */}
<input
  type="text"
  placeholder="Full Name"
/>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
          />

          {/* Graduation Cohort */}
          <input
            type="text"
            placeholder="Graduation Cohort"
          />

          {/* Program Selection */}
          <select>
            <option value="">
              Select Program
            </option>

            <option value="Software Development with AI">
              Software Development with AI
            </option>

            <option value="Cybersecurity">
              Cybersecurity
            </option>

            <option value="Data Analytics">
              Data Analytics
            </option>
          </select>

          {/* LinkedIn Profile */}
          <input
            type="text"
            placeholder="LinkedIn URL"
          />

{/* Current Company */}
<input
  type="text"
  placeholder="Current Company"
/>

{/* Current Job Title */}
<input
  type="text"
  placeholder="Current Job Title"
/>

{/* Mentorship Interest */}
<select>
  <option value="">
    Interested in Mentoring?
  </option>

  <option value="Yes">
    Yes
  </option>

  <option value="No">
    No
  </option>
</select>

{/* Guest Speaker Interest */}
<select>
  <option value="">
    Interested in Guest Speaking?
  </option>

  <option value="Yes">
    Yes
  </option>

  <option value="No">
    No
  </option>
</select>

{/* Hiring Interest */}
<select>
  <option value="">
    Interested in Hiring Pivot Graduates?
  </option>

  <option value="Yes">
    Yes
  </option>

  <option value="No">
    No
  </option>
</select>

          {/* Employment Status */}
          <select>
            <option value="">
              Employment Status
            </option>

            <option value="Employed">
              Employed
            </option>

            <option value="Seeking Employment">
              Seeking Employment
            </option>

            <option value="Continuing Education">
              Continuing Education
            </option>

            <option value="Career Advancement">
              Career Advancement
            </option>
          </select>

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
          />

          {/* Submit Registration */}
          <button>
            Submit Registration
          </button>

          {/* Registration Notice */}
          <p className="login-note">
            Your account will remain pending until approved by Admin.
          </p>

          {/* Back To Login */}
          <button
            className="secondary-btn"
            onClick={() => setLoginType("student")}
          >
            Back to Login
          </button>

        </div>
      </div>
    );
  }

  // ==========================================
  // STUDENT / ALUMNI LOGIN SCREEN
  // ==========================================
  if (loginType === "student") {
    return (
      <div className="login-page">
        <div className="login-card">

          <h1>Student / Alumni Login</h1>

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
          />

          {/* Login Button */}
          <button onClick={handleStudentLogin}>
            Login
          </button>

          {/* Registration Section */}
          <p className="login-note">
            Don't have an account?
          </p>

          <button
            className="secondary-btn"
            onClick={() => setLoginType("register")}
          >
            Register
          </button>

          {/* Back Button */}
          <button
            className="secondary-btn"
            onClick={() => setLoginType("choice")}
          >
            Back
          </button>

        </div>
      </div>
    );
  }

  // ==========================================
  // MAIN LANDING SCREEN
  // ==========================================
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Pivot Tech Career Connect</h1>

        {/* Employee Portal */}
        <button
          onClick={() => setLoginType("employee")}
        >
          Employee Login
        </button>

        {/* Student / Alumni Portal */}
        <button
          onClick={() => setLoginType("student")}
        >
          Student / Alumni Login
        </button>

      </div>
    </div>
  );
}