export default function ProjectList({ projects }) {
  return <div className="project-list">{projects.map((project, index) => <img className="project" src={project.img} alt={`${project.category} project`} key={`${project.img}-${index}`} />)}</div>;
}
