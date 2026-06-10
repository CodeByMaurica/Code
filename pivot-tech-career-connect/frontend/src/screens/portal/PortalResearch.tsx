export default function PortalResearch() {
  const researchBriefs = [
    {
      track: "Software Development with AI",
      topic: "AI coding tools are becoming standard in developer workflows.",
      tools: "GitHub Copilot, ChatGPT, Cursor",
      action: "Practice using AI tools to debug and explain code.",
    },
    {
      track: "Cybersecurity",
      topic: "SOC analyst roles continue to require Security+ and SIEM basics.",
      tools: "Splunk, Microsoft Sentinel, Wireshark",
      action: "Review Security+ concepts and complete a SIEM tutorial.",
    },
    {
      track: "Data Analytics",
      topic: "Power BI, SQL, and Python remain top skills for entry-level analysts.",
      tools: "Power BI, SQL, Python, Excel",
      action: "Build a small dashboard project using public data.",
    },
  ];

  return (
    <div>
      <h1>Industry Research</h1>

      <div className="table-container">
        <h2>Weekly Research Briefs</h2>

        <table>
          <thead>
            <tr>
              <th>Track</th>
              <th>Trend / Topic</th>
              <th>Tools</th>
              <th>Action Step</th>
            </tr>
          </thead>

          <tbody>
            {researchBriefs.map((brief, index) => (
              <tr key={index}>
                <td>{brief.track}</td>
                <td>{brief.topic}</td>
                <td>{brief.tools}</td>
                <td>{brief.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}