import { type Projects } from '@/src/data/projects';

export const getTotalProjects = (projects: Projects) => {
  let total = 0;

  for (let i = 0; i < projects.length; i++) {
    total = total + projects[i].projects.length;
  }

  return total;
};
