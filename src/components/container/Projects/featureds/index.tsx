import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { FeaturedProject } from '@/src/components';
import { StyledFeaturedProjects } from './styles';

type Projects = {
  year: string;
  projects: Project[];
}[];

interface Project {
  title: string;
  url: string;
  description?: string;
  iconName?: string;
  stats?: string;
  width?: number;
  height?: number;
  margin?: string;
}

interface FeaturedProjectsProps {
  featured: string[];
}

export const FeaturedProjects = ({ featured }: FeaturedProjectsProps) => {
  const [isHovered, setIsHovered] = useState('');
  const { t } = useTranslation();

  const projects: Projects = [
    {
      year: '2022',
      projects: [
        {
          title: t('pages.projects.portfolio.title'),
          url: 'https://github.com/micheldslive/micode.dev',
          description: t('pages.projects.portfolio.description'),
          iconName: 'assignment'
        },
        {
          title: t('pages.projects.books.title'),
          url: 'https://books-challenge-micode.vercel.app/',
          description: t('pages.projects.books.description'),
          iconName: 'book'
        },
        {
          title: t('pages.projects.weather.title'),
          url: 'https://weather-tds.netlify.app/',
          description: t('pages.projects.weather.description'),
          iconName: 'weather'
        },
        {
          title: t('pages.projects.movies.title'),
          url: 'https://movies-challenge-dot.vercel.app/',
          description: t('pages.projects.movies.description'),
          iconName: 'movie'
        },
        {
          title: t('pages.projects.calendar.title'),
          url: 'https://mi-calendar.vercel.app/',
          description: t('pages.projects.calendar.description'),
          iconName: 'calendar',
          width: 41,
          height: 41,
          margin: '0 0 0 -10px'
        }
      ]
    }
  ];

  return (
    <StyledFeaturedProjects aria-label='featuredProjects'>
      {projects
        .map(item => {
          return item.projects.filter(project =>
            featured.includes(project.title)
          );
        })
        .filter(item => item.length > 0 && item)
        .flat()
        .map((item, index) => (
          <FeaturedProject
            key={index}
            project={item}
            onHover={setIsHovered}
            isHovered={item.title === isHovered}
          />
        ))}
    </StyledFeaturedProjects>
  );
};
