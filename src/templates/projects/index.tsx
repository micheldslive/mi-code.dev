import Head from 'next/head';
import { Base, AllProjects, FeaturedProjects } from '@/src/components';
import { projects } from '@/src/data/projects';
import { useTranslation } from 'next-i18next';
import { getTotalProjects, stripHtml } from '@/src/utils';
import { featured } from '@/src/data';
import { type DefaultProps } from '@/src/@types';

export type ProjectsProps = DefaultProps;

export const ProjectsTemplate = ({
  primaryColor,
  secondaryColor
}: ProjectsProps) => {
  const totalProjects = getTotalProjects(projects);
  const { t } = useTranslation();

  return (
    <Base
      tagline={t('pages.projects.tagline')}
      title={t('pages.projects.title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('pages.projects.title')}</title>
        <meta content={t('pages.projects.title')} property='og:title' />
        <meta
          content={stripHtml(
            t('pages.projects.description', {
              totalProjects: String(totalProjects)
            })
          )}
          name='description'
        />
        <meta
          content={stripHtml(
            t('pages.projects.description', {
              totalProjects: String(totalProjects)
            })
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
          __html: t('pages.projects.description', {
            totalProjects: String(totalProjects)
          })
        }}
      />

      <h2>{t('pages.projects.featured')}</h2>
      <FeaturedProjects featured={featured} />

      <h2>{t('pages.projects.all')}</h2>
      <AllProjects />
    </Base>
  );
};
