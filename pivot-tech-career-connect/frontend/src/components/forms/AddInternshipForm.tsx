export default function AddInternshipForm() {
  return (
    <div className="form-card">
      <h2>Add Internship</h2>

      <div className="form-grid">
        <input type="text" placeholder="Internship Title" />
        <input type="text" placeholder="Company" />

        <select>
          <option value="">Select Program</option>
          <option value="Software Development with AI">Software Development with AI</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Data Analytics">Data Analytics</option>
        </select>

        <select>
          <option value="">Term</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>

        <select>
          <option value="">Work Arrangement</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>

        <select>
          <option value="">State</option>
          <option value="Iowa">Iowa</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Nationwide">Nationwide</option>
        </select>

        <input type="text" placeholder="City / Location" />
        <input type="url" placeholder="Apply Link" />

        <select>
          <option value="">Status</option>
          <option value="Found">Found</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Approved">Approved</option>
          <option value="Published">Published</option>
          <option value="Filled">Filled</option>
          <option value="Archived">Archived</option>
        </select>
      </div>

      <textarea placeholder="Internship Description / Notes"></textarea>

      <button className="primary-btn">Save Internship</button>
    </div>
  );
}