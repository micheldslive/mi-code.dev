import { projects } from '@/src/data';

export const AllProjects = () => {
  return (
    <>
      {projects.map((item, index) => (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, index) => (
              <li key={index} aria-label='project'>
                <a href={project.url} target='_blank' rel='noreferrer'>
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
