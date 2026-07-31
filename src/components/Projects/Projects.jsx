import "./Projects.css";
import projects from "../../data/projects";

function Projects() {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <h3>{project.title}</h3>

          <img src={project.image} alt={project.title} />

          <p>{project.description}</p>

          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;