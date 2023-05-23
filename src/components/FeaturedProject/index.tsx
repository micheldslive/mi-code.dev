import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';
import { Body, Description, Hover, Project, Stats, Title } from './styles';
import type { FeaturedProjectProps } from '@/src/@types';

export const FeaturedProject = ({
  project,
  onHover,
  isHovered
}: FeaturedProjectProps) => {
  const { title, url, description, iconName, stats, width, height, margin } =
    project;

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const icon = require(`../../../public/static/icons/${iconName}.json`);
  const iconRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <Project
      href={url}
      target='_blank'
      onHoverStart={() => onHover(title)}
      onHoverEnd={() => onHover('')}
      data-testid='featuredProject'
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
      aria-label='featuredProject'
    >
      <Lottie
        lottieRef={iconRef}
        style={{
          width: width || 24,
          height: height || 24,
          margin: margin || '0 0 10px 0'
        }}
        animationData={icon}
        loop={false}
        autoplay={false}
      />
      <Body>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {stats && <Stats>{stats}</Stats>}
      </Body>
      {isHovered && (
        <Hover
          layoutId='projects'
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: 5,
            transition: {
              type: 'tween',
              repeat: 1,
              repeatType: 'reverse'
            }
          }}
          exit={{ y: 0, opacity: 0 }}
        />
      )}
    </Project>
  );
};
