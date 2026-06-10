export default function PortalSupport() {
  return (
    <div>
      <h1>Support Request</h1>

      <div className="form-card">
        <h2>Request Career Support</h2>

        <div className="form-grid">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />

          <select>
            <option value="">Support Type</option>
            <option value="Resume Help">Resume Help</option>
            <option value="Interview Coaching">Interview Coaching</option>
            <option value="Job Referrals">Job Referrals</option>
            <option value="Apprenticeship Support">Apprenticeship Support</option>
            <option value="Career Check-In">Career Check-In</option>
          </select>

          <select>
            <option value="">Urgency</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <textarea placeholder="Tell us what support you need"></textarea>

        <button className="primary-btn">Submit Request</button>
      </div>
    </div>
  );
}