import { useTranslation } from 'next-i18next';

export const useProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      year: '2023',
      projects: [
        {
          title: t('pages.projects.portfolio.title'),
          description: t('pages.projects.portfolio.description'),
          links: { git: t('pages.projects.portfolio.links.github') },
          iconName: t('pages.projects.portfolio.icon')
        },
        {
          title: t('pages.projects.opea.title'),
          description: t('pages.projects.opea.description'),
          links: {
            git: t('pages.projects.opea.links.github'),
            web: t('pages.projects.opea.links.web')
          },
          iconName: t('pages.projects.opea.icon')
        }
      ]
    },
    {
      year: '2022',
      projects: [
        {
          title: t('pages.projects.books.title'),
          description: t('pages.projects.books.description'),
          links: {
            git: t('pages.projects.books.links.github'),
            web: t('pages.projects.books.links.web')
          },
          iconName: t('pages.projects.books.icon')
        },
        {
          title: t('pages.projects.weather.title'),
          description: t('pages.projects.weather.description'),
          links: {
            git: t('pages.projects.weather.links.github'),
            web: t('pages.projects.weather.links.web')
          },
          iconName: t('pages.projects.weather.icon')
        },
        {
          title: t('pages.projects.movies.title'),
          description: t('pages.projects.movies.description'),
          links: {
            git: t('pages.projects.movies.links.github'),
            web: t('pages.projects.movies.links.web')
          },
          iconName: t('pages.projects.movies.icon')
        },
        {
          title: t('pages.projects.calendar.title'),
          description: t('pages.projects.calendar.description'),
          links: {
            git: t('pages.projects.calendar.links.github'),
            web: t('pages.projects.calendar.links.web')
          },
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
