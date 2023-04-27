import {
  Footer,
  Navbar,
  Stars,
  PostContainer,
  PostContent,
  PostMain
} from '@/components';
import { GradientTitle, Wrapper } from './styles';

interface BaseProps {
  children: React.ReactNode;
  title: string;
  tagline: string;
  primaryColor: string;
  secondaryColor: string;
}

export const Base = ({
  children,
  primaryColor,
  secondaryColor,
  tagline,
  title
}: BaseProps) => {
  return (
    <Wrapper>
      <Navbar />
      <PostMain
        css={{
          '& ::selection': {
            background: `$${primaryColor}`,
            color: '#000',
            WebkitTextFillColor: '#000'
          }
        }}
      >
        <PostContent>
          <PostContainer>
            <GradientTitle
              css={{
                backgroundImage: `linear-gradient(
                135deg,
                $${primaryColor} 0%,
                $${secondaryColor} 100%
              );`
              }}
            >
              {tagline ? tagline : title}
            </GradientTitle>
            {children}
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
      <Stars />
    </Wrapper>
  );
};
