import Lottie, { type LottieRefCurrentProps } from 'lottie-react';
import { type Dispatch, type SetStateAction, useRef } from 'react';
import type { Project } from '@/data';
import {
  Body,
  Description,
  Hover,
  Project as StyledProject,
  Stats,
  Title
} from './styles';

interface FeaturedProjectProps {
  project: Project;
  onHover: Dispatch<SetStateAction<string>>;
  isHovered: boolean;
}

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
    <StyledProject
      href={url}
      target='_blank'
      onHoverStart={() => onHover(title)}
      onHoverEnd={() => onHover('')}
      data-testid='featuredProject'
      onMouseEnter={() => iconRef.current?.play()}
      onMouseLeave={() => iconRef.current?.stop()}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </StyledProject>
  );
};
