import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <img src={project.image} alt={project.title} />

      <p>{project.description}</p>

      <ul className="tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
        {project.repoUrl}
      </a>
    </div>
  )
}

export default ProjectCard