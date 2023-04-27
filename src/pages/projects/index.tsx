import { getLocaleProps } from '@/locales';
import { ProjectsTemplate, type ProjectsProps } from '@/templates';

const Projects = (pageProps: ProjectsProps) => {
  return <ProjectsTemplate {...pageProps} />;
};

export default Projects;

export const getStaticProps = getLocaleProps(() => {
  const meta = {
    tagline: 'Apps. Libs. Open Source.',
    primaryColor: 'cyan',
    secondaryColor: 'green'
  };

  return { props: meta };
});
