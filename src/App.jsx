import projects from "./data/projects.js";
import skillGroups from "./data/skills.js";
import {
  EpidemicVisual,
  JourneyVisual,
  TimeSeriesVisual,
} from "./components/ProjectVisuals.jsx";

function App() {
  return (
    <>
      <header className="site-header">
        <a className="site-header__brand" href="#top" aria-label="Xiruo Nie, home">
          XN
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#highlights">Visuals</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="site-header__cv"
          href="/cv/XiruoNie_cv%20.pdf"
          download="Xiruo-Nie-CV.pdf"
        >
          CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="hero__eyebrow">BSc Mathematics &amp; Statistics · University of Leeds</p>

          <h1 id="hero-title">
            Xiruo Nie
            <span>Turning complex data into clear decisions.</span>
          </h1>

          <p className="hero__summary">
            I am a second-year mathematics and statistics student interested in data analysis,
            quantitative finance, risk, and research. I use Python, R, and statistical
            thinking to investigate real-world problems and communicate useful insights.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              Explore my work
            </a>
            <a className="button button--text" href="mailto:xrnie07@163.com">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ul className="hero__facts" aria-label="Portfolio highlights">
            <li>
              <strong>Python + R</strong>
              <span>Analysis &amp; modelling</span>
            </li>
            <li>
              <strong>2× Awards</strong>
              <span>ASA DataFest</span>
            </li>
            <li>
              <strong>Data stories</strong>
              <span>Built for decisions</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="visual-card">
            <div className="visual-card__header">
              <span>PROFILE_SIGNAL</span>
              <span>2026</span>
            </div>
            <div className="chart">
              <span className="chart__line" />
              <i style={{ "--x": "12%", "--y": "72%" }} />
              <i style={{ "--x": "30%", "--y": "57%" }} />
              <i style={{ "--x": "48%", "--y": "61%" }} />
              <i style={{ "--x": "67%", "--y": "35%" }} />
              <i style={{ "--x": "86%", "--y": "20%" }} />
            </div>
            <p>Curiosity, measured.</p>
          </div>
        </div>
      </section>

      <section className="about" id="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>01</span>
          <p>About me</p>
        </div>

        <div className="about__grid">
          <h2 id="about-title">
            I enjoy questions that connect
            <em> mathematical rigour </em>
            with real-world usefulness.
          </h2>

          <div className="about__copy">
            <p>
              At the University of Leeds, I am developing a strong foundation in
              probability, statistics, mathematical modelling, and financial mathematics.
              I am especially interested in using these ideas to understand uncertainty,
              identify patterns, and support better decisions.
            </p>

            <p>
              My experience spans Python and GPU software at MuXi Integrated Circuit,
              collaborative healthcare analysis at ASA DataFest, and supporting other
              students as a PAL Tutor. Together, these roles have taught me to approach
              technical problems carefully and explain my conclusions clearly.
            </p>

            <div className="about__interests" aria-label="Current areas of interest">
              <p>Currently exploring</p>
              <ul>
                <li>Quantitative finance</li>
                <li>Risk and uncertainty</li>
                <li>Statistical research</li>
                <li>Data storytelling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="education" id="education" aria-labelledby="education-title">
        <div className="section-label section-label--ink">
          <span>02</span>
          <p>Education</p>
        </div>

        <div className="education__heading">
          <p>Academic foundation</p>
          <h2 id="education-title">
            Building the theory to ask better questions of data.
          </h2>
        </div>

        <article className="education-card">
          <div className="education-card__meta">
            <p>University of Leeds</p>
            <span>Current undergraduate study</span>
          </div>

          <div className="education-card__degree">
            <div>
              <p className="education-card__type">Bachelor of Science</p>
              <h3>Mathematics and Statistics</h3>
            </div>

            <p className="education-card__summary">
              A rigorous degree combining mathematical reasoning, probability, statistical
              analysis, and computational methods. My studies are developing the theoretical
              and practical tools needed to model uncertainty and analyse complex systems.
            </p>
          </div>

          <div className="education-card__subjects">
            <p>Selected areas of study</p>
            <ul>
              <li><span>01</span> Statistical Methods </li>
              <li><span>02</span> Financial Mathematics</li>
              <li><span>03</span> Time Series</li>
              <li><span>04</span> Further Linear Algebra and Discrete Mathematics</li>
              <li><span>05</span> Computational Mathematics and Modelling</li>
              <li><span>06</span> Optimisation</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="experience" id="experience" aria-labelledby="experience-title">
        <div className="section-label section-label--ink">
          <span>03</span>
          <p>Internship</p>
        </div>

        <div className="experience__heading">
          <p>Applied experience</p>
          <h2 id="experience-title">
            Technical problem-solving, strengthened by clear communication.
          </h2>
        </div>

        <div className="experience__list">
          <article className="experience-card">
            <div className="experience-card__identity">
              <div>
                <p className="experience-card__number">Experience 01</p>
                <p className="experience-card__date">Summer 2025</p>
              </div>
              <h3>GPU Software / Python Intern</h3>
              <p className="experience-card__company">
                MuXi Integrated Circuit Co., Ltd.
              </p>
            </div>

            <div className="experience-card__details">
              <p className="experience-card__intro">
                Contributing to Python engineering in a specialised GPU environment.
              </p>

              <ul aria-label="MuXi internship contributions">
                <li>
                  <span>Porting</span>
                  <p>
                    Assisted in porting <code>cufile-python</code> to the MuXi GPU
                    environment, gaining practical exposure to GPU architecture and
                    high-throughput computing.
                  </p>
                </li>
                <li>
                  <span>Debugging</span>
                  <p>
                    Traced dependency-chain errors across packages, version conflicts,
                    and platform-specific environments to investigate compatibility issues.
                  </p>
                </li>
                <li>
                  <span>Algorithms</span>
                  <p>
                    Applied ideas including trees, heaps, sorting, recursion, shortest
                    paths, and hash tables to strengthen structured implementation skills.
                  </p>
                </li>
                <li>
                  <span>Performance</span>
                  <p>
                    Explored single-core testing and performance analysis to understand
                    differences across GPU cores and possible routes for runtime optimisation.
                  </p>
                </li>
              </ul>

              <div className="experience-card__takeaway">
                <span>What I developed</span>
                <p>
                  Practical confidence working through unfamiliar systems where careful
                  debugging, computational thinking, and performance all matter.
                </p>
              </div>
            </div>
          </article>

          <article className="experience-card">
            <div className="experience-card__identity experience-card__identity--pal">
              <div>
                <p className="experience-card__number">Experience 02</p>
                <p className="experience-card__date">Sep 2025 - Present</p>
              </div>
              <h3>PAL Tutor</h3>
              <p className="experience-card__company">University of Leeds</p>
            </div>

            <div className="experience-card__details">
              <p className="experience-card__intro">
                Helping junior students build confidence in mathematics and statistics.
              </p>

              <ul aria-label="PAL Tutor responsibilities">
                <li>
                  <span>Teaching</span>
                  <p>
                    Supported peer-assisted learning sessions by explaining technical
                    concepts in a clear, structured, and approachable way.
                  </p>
                </li>
                <li>
                  <span>Mentoring</span>
                  <p>
                    Helped students improve problem-solving methods and revision strategies,
                    developing my communication, mentoring, and leadership skills.
                  </p>
                </li>
              </ul>

              <div className="experience-card__takeaway">
                <span>What I developed</span>
                <p>
                  The ability to adapt an explanation to the audience while keeping the
                  underlying mathematical reasoning precise.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="section-label section-label--ink">
          <span>04</span>
          <p>Selected projects</p>
        </div>

        <div className="projects__heading">
          <p>Analysis in practice</p>
          <h2 id="projects-title">
            From complex questions to evidence people can use.
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card__topline">
                <span>Case study {project.number}</span>
                <span>{project.period}</span>
              </div>

              <p className="project-card__context">{project.context}</p>
              <h3>{project.title}</h3>
              <p className="project-card__summary">{project.summary}</p>

              <ul className="project-card__methods" aria-label={`${project.title} methods`}>
                {project.methods.map((method) => (
                  <li key={method}>{method}</li>
                ))}
              </ul>

              <div className="project-card__evidence">
                <p>What I did</p>
                <ul>
                  {project.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="awards" id="awards" aria-labelledby="awards-title">
        <div className="section-label">
          <span>05</span>
          <p>Awards</p>
        </div>

        <div className="awards__heading">
          <p>External recognition</p>
          <h2 id="awards-title">
            Analysis recognised for both insight and communication.
          </h2>
        </div>

        <div className="awards__grid">
          <article className="award-card">
            <div className="award-card__topline">
              <span>Award 01</span>
              <span>2026</span>
            </div>
            <p className="award-card__event">ASA DataFest</p>
            <h3>Best of Show</h3>
            <p className="award-card__note">
              Team recognition for the overall strength of our competition project.
            </p>
          </article>

          <article className="award-card award-card--accent">
            <div className="award-card__topline">
              <span>Award 02</span>
              <span>2026</span>
            </div>
            <p className="award-card__event">ASA DataFest</p>
            <h3>Best Communication and Data Storytelling</h3>
            <p className="award-card__note">
              Team recognition for communicating analysis through a clear,
              audience-focused data story.
            </p>
          </article>
        </div>
      </section>

      <section className="skills" id="skills" aria-labelledby="skills-title">
        <div className="section-label section-label--ink">
          <span>06</span>
          <p>Skills</p>
        </div>

        <div className="skills__heading">
          <p>Capability matrix</p>
          <h2 id="skills-title">
            Tools for reasoning, modelling, and communicating clearly.
          </h2>
        </div>

        <div className="skills__matrix">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.number}>
              <p className="skill-group__number">{group.number}</p>

              <div className="skill-group__identity">
                <h3>{group.category}</h3>
                <p>{group.purpose}</p>
              </div>

              <ul aria-label={group.category}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="cv-cta" aria-labelledby="cv-title">
        <div className="cv-cta__content">
          <p className="cv-cta__label">Full application profile</p>
          <h2 id="cv-title">Want the complete picture?</h2>
          <p>
            Download my CV for a concise overview of my education, experience,
            projects, awards, and technical skills.
          </p>
        </div>

        <div className="cv-cta__action">
          <a
            className="cv-download"
            href="/cv/XiruoNie_cv%20.pdf"
            download="Xiruo-Nie-CV.pdf"
          >
            <span>Download CV</span>
            <span aria-hidden="true">PDF</span>
          </a>
          <p>English version</p>
        </div>
      </section>

      <section className="contact" id="contact" aria-labelledby="contact-title">
        <div className="section-label">
          <span>07</span>
          <p>Contact</p>
        </div>

        <div className="contact__grid">
          <div className="contact__intro">
            <p>Postgraduate study, internships, and research opportunities</p>
            <h2 id="contact-title">Let&apos;s start a conversation.</h2>
            <p>
              I am interested in opportunities involving data analysis, quantitative
              finance, risk, and research. The quickest way to reach me is by email.
            </p>
          </div>

          <div className="contact__links">
            <a className="contact-link contact-link--primary" href="mailto:xrnie07@163.com">
              <span>Email</span>
              <strong>xrnie07@163.com</strong>
              <span aria-hidden="true">-&gt;</span>
            </a>

            <a
              className="contact-link"
              href="https://www.linkedin.com/in/xiruonie"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <strong>linkedin.com/in/xiruonie</strong>
              <span aria-hidden="true">-&gt;</span>
            </a>

            <div className="contact__phones">
              <a href="tel:+447534631569">
                <span>UK</span>
                <strong>+44 7534 631569</strong>
              </a>
              <a href="tel:+8618971017102">
                <span>China</span>
                <strong>+86 189 7101 7102</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights" id="highlights" aria-labelledby="highlights-title">
        <div className="section-label section-label--ink">
          <span>08</span>
          <p>Visual project highlights</p>
        </div>

        <div className="highlights__heading">
          <p>Methods made visible</p>
          <h2 id="highlights-title">
            Three ways I turn analytical structure into a clear story.
          </h2>
        </div>

        <div className="highlights__grid">
          <article className="highlight-card">
            <div className="highlight-card__topline">
              <span>Flow</span>
              <span>ASA DataFest</span>
            </div>
            <h3>Mapping patient journeys</h3>
            <figure>
              <JourneyVisual />
              <figcaption>
                A schematic reading path for organising a complex patient journey before
                comparing patterns or outcomes.
              </figcaption>
            </figure>
            <p className="highlight-card__takeaway">
              <span>Takeaway</span>
              Structure helps a non-technical audience follow the analysis from context
              to recommendation.
            </p>
          </article>

          <article className="highlight-card">
            <div className="highlight-card__topline">
              <span>Simulation</span>
              <span>Epidemic dynamics</span>
            </div>
            <h3>Comparing long-term scenarios</h3>
            <figure>
              <EpidemicVisual />
              <figcaption>
                A conceptual phase-space view of how transmission and quarantine conditions
                separate survival, coexistence, and extinction outcomes.
              </figcaption>
            </figure>
            <p className="highlight-card__takeaway">
              <span>Takeaway</span>
              Visual scenario comparison makes the behaviour of a nonlinear model easier
              to interpret.
            </p>
          </article>

          <article className="highlight-card">
            <div className="highlight-card__topline">
              <span>Diagnostics</span>
              <span>Time series</span>
            </div>
            <h3>Checking a statistical model</h3>
            <figure>
              <TimeSeriesVisual />
              <figcaption>
                A method schematic connecting observations, autoregressive modelling, and
                residual diagnostics without presenting invented results.
              </figcaption>
            </figure>
            <p className="highlight-card__takeaway">
              <span>Takeaway</span>
              A fitted model is only useful after its assumptions and remaining structure
              have been checked.
            </p>
          </article>
        </div>
      </section>
      </main>

      <footer className="site-footer">
        <p>Xiruo Nie · Mathematics &amp; Statistics</p>
        <p>© 2026 · Built with React</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
