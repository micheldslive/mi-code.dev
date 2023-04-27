export type Projects = {
  year: string;
  projects: Project[];
}[];

export interface Project {
  title: string;
  url: string;
  description?: string;
  iconName?: string;
  stats?: string;
  width?: number;
  height?: number;
  margin?: string;
}

export const projects: Projects = [
  {
    year: '2022/2023',
    projects: [
      {
        title: 'Personal Portfolio',
        url: 'https://github.com/micheldslive/micode.dev',
        iconName: 'book'
      },
      {
        title: 'Books',
        url: 'https://books-challenge-micode.vercel.app/',
        iconName: 'book'
      },
      {
        title: 'Weather',
        url: 'https://weather-tds.netlify.app/',
        iconName: 'weather'
      },
      {
        title: 'Movies',
        url: 'https://movies-challenge-dot.vercel.app/',
        iconName: 'movie'
      },
      {
        title: 'mi-calendar',
        url: 'https://mi-calendar.vercel.app/',
        iconName: 'calendar'
      }
    ]
  }
];
