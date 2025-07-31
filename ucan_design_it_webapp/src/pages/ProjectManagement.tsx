import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects } from "../services/api";

interface Project {
  id: number;
  name: string;
}

const ProjectManagement = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then((data) => setProjects(data as Project[]));
  }, []);

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
