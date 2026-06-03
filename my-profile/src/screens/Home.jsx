import profilePhoto from "../assets/profile.jpg";

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <img
          src={profilePhoto}
          alt="Maurica Bellaphant"
          className="profile-photo"
        />

        <div className="hero-text">
          <h1>Maurica Bellaphant</h1>

          <h3>Full Stack Developer & AI Automation Specialist</h3>

          <p>
            Building business solutions with React, AI, and workflow
            automation. Passionate about creating efficient systems that help
            businesses save time, increase productivity, and scale through
            technology.
          </p>

          <div className="button-row">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a
              href="mailto:m.bellaphant@outlook.com"
              className="btn secondary-btn"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section className="section-card">
        <h2>Why Hire Me</h2>

        <ul>
          <li>✓ React Development</li>
          <li>✓ AI Automation</li>
          <li>✓ Problem Solving</li>
          <li>✓ Business Operations Experience</li>
        </ul>
      </section>

      <section className="section-card" id="projects">
        <h2>Featured Projects</h2>

        <div className="project-list">
          <div className="project-card">
            <h3>Task Manager App</h3>
            <p>
              A React application for organizing tasks, tracking progress, and
              improving productivity.
            </p>
          </div>

          <div className="project-card">
            <h3>Movie App</h3>
            <p>
              A React application using APIs to search movies, view details, and
              manage favorites.
            </p>
          </div>

          <div className="project-card">
            <h3>LTM AI Studio Website</h3>
            <p>
              A business website focused on AI automation, consulting, and
              digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-card">
        <h2>Contact</h2>

        <p>Email: m.bellaphant@outlook.com</p>

        <p>LinkedIn: https://www.linkedin.com/in/maurica-bellaphant-6069b63b2/</p>

        <p>GitHub: https://github.com/CodeByMaurica</p>
      </section>
    </main>
  );
}