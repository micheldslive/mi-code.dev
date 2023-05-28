import { useProjects } from '@/src/data';

export const AllProjects = () => {
  const { projects } = useProjects();
  return (
    <>
      {projects.map((item, index) => (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map(({ title, url }, index) => (
              <li key={index} aria-label='project'>
                <a href={url} target='_blank' rel='noreferrer'>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
