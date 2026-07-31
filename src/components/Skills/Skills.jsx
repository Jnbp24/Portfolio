function Skills() {
  return (
    <section id="skills" className="section info-box skills-box">
      <h2>Skills</h2>

      <div className="skills-container">

        <div className="skill-group">
          <h3>Frontend</h3>
          <ul>
            <li><img src="/images/htmllogo.svg" />HTML & CSS</li>
            <li><img src="/images/javascriptlogo.svg" />JavaScript</li>
            <li><img src="/images/reactlogo.svg" />React</li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Backend</h3>
          <ul>
            <li><img src="/images/csharplogo.svg" />C#</li>
            <li><img src="/images/javalogo.svg" />Java</li>
            <li><img src="/images/expresslogo.svg" />Express</li>
            <li>
              <img src="/images/entityframeworkcorelogo.svg" />
              Entity Framework
            </li>
          </ul>
        </div>

        <div className="skill-group">
          <h3>Data</h3>
          <ul>
            <li><img src="/images/sqllogo.svg" />SQL</li>
            <li><img src="/images/pythonlogo.svg" />Python</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;