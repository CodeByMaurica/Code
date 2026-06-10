export default function PortalProfile() {
  return (
    <div>
      <h1>My Profile</h1>

      <div className="form-card">
        <h2>Update Profile</h2>

        <div className="form-grid">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="text" placeholder="LinkedIn URL" />

          <select>
            <option value="">Program</option>
            <option value="Software Development with AI">Software Development with AI</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Data Analytics">Data Analytics</option>
          </select>

          <select>
            <option value="">Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Seeking Employment">Seeking Employment</option>
            <option value="Continuing Education">Continuing Education</option>
            <option value="Career Advancement">Career Advancement</option>
          </select>

          <input type="text" placeholder="Current Company" />
          <input type="text" placeholder="Current Job Title" />

          <select>
            <option value="">Interested in Mentoring?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <select>
            <option value="">Interested in Guest Speaking?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <button className="primary-btn">Save Profile</button>
      </div>
    </div>
  );
}