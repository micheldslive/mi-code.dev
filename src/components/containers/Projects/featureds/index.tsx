import { useState } from 'react';
import { useI18n } from '@/locales';
import { FeaturedProject } from '@/components';
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
  const { scopedT } = useI18n();
  const t = scopedT('pages.projects');

  const projects: Projects = [
    {
      year: '2022',
      projects: [
        {
          title: t('portfolio.title'),
          url: 'https://github.com/micheldslive/micode.dev',
          description: t('portfolio.description'),
          iconName: 'assignment'
        },
        {
          title: t('books.title'),
          url: 'https://books-challenge-micode.vercel.app/',
          description: t('books.description'),
          iconName: 'book'
        },
        {
          title: t('weather.title'),
          url: 'https://weather-tds.netlify.app/',
          description: t('weather.description'),
          iconName: 'weather'
        },
        {
          title: t('movies.title'),
          url: 'https://movies-challenge-dot.vercel.app/',
          description: t('movies.description'),
          iconName: 'movie'
        },
        {
          title: t('calendar.title'),
          url: 'https://mi-calendar.vercel.app/',
          description: t('calendar.description'),
          iconName: 'calendar',
          width: 41,
          height: 41,
          margin: '0 0 0 -10px'
        }
      ]
    }
  ];

  return (
    <StyledFeaturedProjects>
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
