import projects from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Home.css";

function Home() {
  return (
    <main className="home">
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>
    </main>
  );
}

export default Home;