import Head from 'next/head';
import { Base, AllProjects, FeaturedProjects } from '@/components';
import { projects } from '@/data/projects';
import { useI18n } from '@/locales';
import { getTotalProjects, stripHtml } from '@/utils';

export interface ProjectsProps {
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
}

export const ProjectsTemplate = ({
  primaryColor,
  secondaryColor,
  tagline
}: ProjectsProps) => {
  const totalProjects = getTotalProjects(projects);

  const { scopedT } = useI18n();
  const t = scopedT('pages.projects');

  return (
    <Base
      tagline={tagline}
      title={t('title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('title')}</title>
        <meta content={t('title')} property='og:title' />
        <meta
          content={stripHtml(
            t('description', { totalProjects: String(totalProjects) })
          )}
          name='description'
        />
        <meta
          content={stripHtml(
            t('description', { totalProjects: String(totalProjects) })
          )}
          property='og:description'
        />
        <meta
          content='https://micode-dev.vercel.app/projects'
          property='og:url'
        />
      </Head>

      <p
        dangerouslySetInnerHTML={{
          __html: t('description', { totalProjects: String(totalProjects) })
        }}
      />

      <h2>{t('featured')}</h2>
      <FeaturedProjects
        featured={[
          'Personal Portfolio',
          'Weather',
          'Books',
          'Movies',
          'mi-calendar'
        ]}
      />

      <h2>{t('all')}</h2>
      <AllProjects />
    </Base>
  );
};
