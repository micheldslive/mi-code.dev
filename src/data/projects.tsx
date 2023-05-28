import { useTranslation } from 'next-i18next';

export type Projects = {
  year: string;
  projects: Project[];
}[];

export interface Project {
  title: string;
  url: string;
  description?: string;
  icon?: string;
  stats?: string;
  width?: number;
  height?: number;
  margin?: string;
}

export const useProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      year: '2023',
      projects: [
        {
          title: t('pages.projects.portfolio.title'),
          description: t('pages.projects.portfolio.description'),
          url: t('pages.projects.portfolio.url'),
          iconName: t('pages.projects.portfolio.icon')
        }
      ]
    },
    {
      year: '2022',
      projects: [
        {
          title: t('pages.projects.books.title'),
          description: t('pages.projects.books.description'),
          url: t('pages.projects.books.url'),
          iconName: t('pages.projects.books.icon')
        },
        {
          title: t('pages.projects.weather.title'),
          description: t('pages.projects.weather.description'),
          url: t('pages.projects.weather.url'),
          iconName: t('pages.projects.weather.icon')
        },
        {
          title: t('pages.projects.movies.title'),
          description: t('pages.projects.movies.description'),
          url: t('pages.projects.movies.url'),
          iconName: t('pages.projects.movies.icon')
        },
        {
          title: t('pages.projects.calendar.title'),
          description: t('pages.projects.calendar.description'),
          url: t('pages.projects.calendar.url'),
          iconName: t('pages.projects.calendar.icon'),
          width: 41,
          height: 41,
          margin: '0 0 0 -10px'
        }
      ]
    }
  ];

  return { projects };
};
