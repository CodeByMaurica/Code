export default function JobFilters() {
  return (
    <div className="filter-card">
      <h2>Job Filters</h2>

      <div className="filter-grid">
        <select>
          <option value="">All Programs</option>
          <option value="Software Development with AI">Software Development with AI</option>
          <option value="Cybersecurity">Cybersecurity</option>
          <option value="Data Analytics">Data Analytics</option>
        </select>

        <select>
          <option value="">All Levels</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>

        <select>
          <option value="">All Work Types</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>

        <select>
          <option value="">All Employment Types</option>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select>
          <option value="">All States</option>
          <option value="Iowa">Iowa</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Nationwide">Nationwide</option>
        </select>

        <select>
          <option value="">All Statuses</option>
          <option value="Found">Found</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Approved">Approved</option>
          <option value="Published">Published</option>
          <option value="Filled">Filled</option>
          <option value="Archived">Archived</option>
        </select>
      </div>
    </div>
  );
}