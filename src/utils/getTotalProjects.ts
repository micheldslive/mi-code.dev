import { type Projects } from '@/src/data';

export const getTotalProjects = (all: Projects) => {
  let total = 0;

  all.map(year => {
    total += year.projects.length;
  });

  return total;
};
