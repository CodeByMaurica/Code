export default function AddJobForm() {
  return (
    <div className="form-card">
      <h2>Add Job Opening</h2>

      <div className="form-grid">
        <input type="text" placeholder="Job Title" />
        <input type="text" placeholder="Company" />

        <select>
          <option value="">Select Program</option>
          <option value="Software Development with AI">Software Development with AI</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Data Analytics">Data Analytics</option>
        </select>

        <select>
          <option value="">Experience Level</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>

        <select>
          <option value="">Work Arrangement</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>

        <select>
          <option value="">Employment Type</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select>
          <option value="">State</option>
          <option value="Iowa">Iowa</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Nationwide">Nationwide</option>
        </select>

        <input type="text" placeholder="City / Location" />
        <input type="text" placeholder="Salary Range" />
        <input type="url" placeholder="Apply Link" />

        <select>
          <option value="">Source</option>
          <option value="Iowa State Job Board">Iowa State Job Board</option>
          <option value="Tennessee State Job Board">Tennessee State Job Board</option>
          <option value="Louisiana State Job Board">Louisiana State Job Board</option>
          <option value="Indeed">Indeed</option>
          <option value="Company Career Page">Company Career Page</option>
        </select>

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

      <textarea placeholder="Job Description / Notes"></textarea>

      <button className="primary-btn">Save Job</button>
    </div>
  );
}