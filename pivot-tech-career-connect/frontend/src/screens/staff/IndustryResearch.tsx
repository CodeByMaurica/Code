export default function IndustryResearch() {
  const insights = [
    {
      category: "Cybersecurity",
      insight: "Track emerging threats, SOC tools, AI-powered defense, and certifications.",
      action: "Summarize Security+, SIEM, AI security tools, and free training weekly.",
    },
    {
      category: "Data Analytics",
      insight: "Research tools, certifications, AI analytics, dashboards, SQL, Python, and Power BI trends.",
      action: "Create weekly briefs students can use for projects and job preparation.",
    },
    {
      category: "Software Development with AI",
      insight: "Track frameworks, AI coding tools, open-source projects, and entry-level developer trends.",
      action: "Highlight GitHub Copilot, ChatGPT coding, React, TypeScript, APIs, and portfolio projects.",
    },
  ];

  return (
    <div>
      <h1>Industry Research Center</h1>

      <div className="form-card">
        <h2>Add Weekly Research Insight</h2>

        <div className="form-grid">
          <select>
            <option value="">Select Track</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Software Development with AI">
              Software Development with AI
            </option>
            <option value="AI Trends">AI Trends</option>
          </select>

          <input type="text" placeholder="Research Topic" />
          <input type="text" placeholder="Tools / Platforms" />
          <input type="text" placeholder="Certifications Mentioned" />
          <input type="url" placeholder="Source Link" />
          <input type="text" placeholder="Week Number" />
        </div>

        <textarea placeholder="Summary of findings"></textarea>
        <textarea placeholder="Recommended action students can take"></textarea>

        <button className="primary-btn">Save Research Insight</button>
      </div>

      <div className="table-container">
        <h2>Research Focus Areas</h2>

        <table>
          <thead>
            <tr>
              <th>Track</th>
              <th>Research Focus</th>
              <th>Weekly Action</th>
            </tr>
          </thead>

          <tbody>
            {insights.map((item, index) => (
              <tr key={index}>
                <td>{item.category}</td>
                <td>{item.insight}</td>
                <td>{item.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}