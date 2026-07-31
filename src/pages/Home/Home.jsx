import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Contact from "../../components/Contact/Contact";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Experience from "../../components/Experience/Experience";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home">
        <div className="top-section">
          <Hero />
          <Contact />
        </div>

        <Skills />
        <Projects />
        <Experience />
      </main>
    </>
  );
}

export default Home;