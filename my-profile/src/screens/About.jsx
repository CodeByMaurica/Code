import profilePhoto from "../assets/profile.jpg";

export default function About() {
    return (
        <main className="page">
            <section className="section-card about-section">
                <h1 className="section-title">About Me</h1>

                <div className="about-container">
                    <img
                        src={profilePhoto}
                        alt="Maurica Bellaphant"
                        className="profile-photo"
                    />

                    <div className="about-text">
                        <p>
                            My name is Maurica Bellaphant, and I am a Software Development
                            with AI student focused on becoming a Full Stack Developer and AI
                            Automation Specialist.
                        </p>

                        <p>
                            I enjoy building websites, creating business solutions, and
                            learning technologies that help organizations streamline their
                            operations.
                        </p>

                        <p>
                            My goal is to combine software development, automation, and
                            business strategy to create innovative solutions through LTM AI
                            Studio.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-card">
                <h2>Skills</h2>

                <div className="skills-grid">
                    <div className="skill-card">React</div>
                    <div className="skill-card">JavaScript</div>
                    <div className="skill-card">TypeScript</div>
                    <div className="skill-card">HTML</div>
                    <div className="skill-card">CSS</div>
                    <div className="skill-card">Node.js</div>
                    <div className="skill-card">GitHub</div>
                    <div className="skill-card">AI Automation</div>
                    <div className="skill-card">Business Operations</div>
                    <div className="skill-card">Accounts Payable</div>
                </div>
            </section>

            <section className="section-card">
                <h2>Experience</h2>

                <div className="experience-card">
                    <h3>Homemakers Furniture</h3>
                    <p>Accounts Payable Clerk</p>
                    <p>
                        Processed invoices, reconciled accounts, verified payments, and
                        maintained financial accuracy.
                    </p>
                </div>

                <div className="experience-card">
                    <h3>Hussmann Corporation</h3>
                    <p>Service Area Representative</p>
                    <p>
                        Managed service requests, coordinated schedules, and supported
                        customers through issue resolution.
                    </p>
                </div>
            </section>

            <section className="section-card">
                <h2>Currently Learning</h2>

                <ul>
                    <li>React Development</li>
                    <li>TypeScript</li>
                    <li>Node.js Backend Development</li>
                    <li>REST APIs</li>
                    <li>AI Automation Workflows</li>
                    <li>Git & GitHub Collaboration</li>
                    <li>Full Stack Software Development</li>
                </ul>
            </section>

            <section className="section-card">
                <h2>Projects</h2>

                <div className="project-list">
                    <div className="project-card">
                        <h3>Task Manager App</h3>
                        <p>
                            A React application designed to help users organize tasks and
                            track productivity.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>Movie App</h3>
                        <p>
                            Built using React and APIs to search, browse, and save favorite
                            movies.
                        </p>
                    </div>

                    <div className="project-card">
                        <h3>LTM AI Studio</h3>
                        <p>
                            A business platform focused on AI automation, consulting, and
                            digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-card">
                <h2>Hobbies & Interests</h2>

                <ul>
                    <li>Building web applications</li>
                    <li>Learning AI and automation tools</li>
                    <li>Business development</li>
                    <li>Reading and Bible study</li>
                    <li>Creating digital products</li>
                    <li>Helping others learn technology</li>
                </ul>
            </section>

            <section className="section-card">
                <h2>Favorite Quote</h2>

                <blockquote>
                    "Success is built one small step at a time. Stay consistent and trust
                    the process."
                </blockquote>
            </section>

            <section className="section-card">
                <h2>Fun Facts</h2>

                <ul>
                    <li>Mother of 5 amazing children</li>
                    <li>Founder of LTM AI Studio</li>
                    <li>Loves solving problems through technology</li>
                    <li>Passionate about entrepreneurship and automation</li>
                    <li>Enjoys turning ideas into real projects</li>
                </ul>
            </section>
        </main>
    );
}