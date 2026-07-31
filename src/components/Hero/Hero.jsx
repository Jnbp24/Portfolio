function Hero() {
  return (
    <section id="home" className="hero">
      <img src="/images/photome.png" alt="Profile" />

      <div>
        <h1>Jonas Petersen</h1>
        <p>
          Computer Science student and junior developer at Aleta A/S.
        </p>

        <a className="resume-button" href="/resume.pdf" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;