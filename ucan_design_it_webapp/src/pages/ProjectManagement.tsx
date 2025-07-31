import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "Project Alpha" },
  { id: 2, name: "Project Beta" },
  { id: 3, name: "Project Gamma" },
];

const ProjectManagement = () => {
  return (
    <div>
      <h2>Project Management</h2>
      <Link to="/design-wizard">
        <button>Create New</button>
      </Link>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name}
            <button>Open</button>
            <button>Clone</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManagement;
