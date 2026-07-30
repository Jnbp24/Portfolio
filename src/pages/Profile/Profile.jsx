import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <h1>Profile</h1>

      <div className="profile-layout">

        <section className="photo">
          <img src="/images/photome.png" alt="LinkedIn photo" />
          
          <div className="lookingforwork">
            <h3>Contact me</h3>
            <p>
              Feel free to send me a message any time.
            </p>
            <ul>
              <li>
                <a href="https://github.com/Jnbp24" target="_blank" rel="noreferrer">
                  <img src="/images/githublogo.svg" alt="GitHub" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jonas-petersen-3a2160364/" target="_blank" rel="noreferrer">
                  <img src="/images/linkedinlogo.svg" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="mailto:jonasvm6@hotmail.com">
                  <img src="/images/emaillogo.svg" alt="Email" />
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section className="bio info-box">
          <h3>Why did I start programming?</h3>
          <p>
            I got into coding because of my love for problem-solving and critical
            thinking. Since starting my studies, I've become increasingly drawn to
            the architecture and bigger picture of development — how systems are
            designed, not just how individual features work.
          </p>

          <h3>What does my current work entail?</h3>
          <p>
            I'm currently studying Computer Science (AP degree), alongside a student
            job at Aleta, where I work on both data science and junior developer
            tasks. Most of my work involves maintaining the existing codebase and
            helping onboard new customers and banks into the flow, which has also
            given me solid experience communicating with customers and third parties.
            I'm also able to use AI tools effectively while coding, while also
            understanding the fundamentals well enough to know when to step in and
            take control myself.
          </p>

          <h3>Personal hobbies</h3>
          <p>
            Outside of work and coding, I spend my time at the gym, playing video
            games, and playing guitar.
          </p>
        </section>

        <section className="skills info-box">
          <h2>Skills</h2>

          <div className="skill-group">
            <h3>Frontend</h3>
            <ul>
              <li><img src="/images/htmllogo.svg" alt="HTML" /> HTML &amp; CSS</li>
              <li><img src="/images/javascriptlogo.svg" alt="JavaScript" /> JavaScript</li>
              <li><img src="/images/reactlogo.svg" alt="React" /> React</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Backend</h3>
            <ul>
              <li><img src="/images/csharplogo.svg" alt="C#" /> C#</li>
              <li><img src="/images/javalogo.svg" alt="Java" /> Java</li>
              <li><img src="/images/expresslogo.svg" alt="Express" /> Express</li>
              <li><img src="/images/entityframeworkcorelogo.svg" alt="Entity Framework" /> Entity Framework</li>
            </ul>
          </div>

          <div className="skill-group">
            <h3>Data</h3>
            <ul>
              <li><img src="/images/sqllogo.svg" alt="SQL" /> SQL</li>
              <li><img src="/images/pythonlogo.svg" alt="Python" /> Python</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Profile;