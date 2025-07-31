// Mock data
const projects = [
  { id: 1, name: "Project Alpha" },
  { id: 2, name: "Project Beta" },
  { id: 3, name: "Project Gamma" },
];

// Mock API functions
export const getProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 500);
  });
};

export const createProject = (name: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newProject = { id: projects.length + 1, name };
      projects.push(newProject);
      resolve(newProject);
    }, 500);
  });
};

export const calculate = (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock calculation result
      resolve({
        utilization: Math.random() * 100,
        capacity: Math.random() * 200,
        safetyFactor: 1 + Math.random(),
        status: Math.random() > 0.5 ? "Pass" : "Fail",
        data: [
          { name: 'Tension', value: Math.random() * 100 },
          { name: 'Shear', value: Math.random() * 100 },
          { name: 'Combined', value: Math.random() * 100 },
        ]
      });
    }, 1000);
  });
};
