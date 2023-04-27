import { getLocaleProps } from '@/locales';
import { AboutTemplate, type AboutProps } from '@/templates';

const About = (pageProps: AboutProps) => {
  return <AboutTemplate {...pageProps} />;
};

export default About;

export const getStaticProps = getLocaleProps(() => {
  const meta = {
    imagePath: '/static/imagePaths/micheldslive.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple'
  };

  return { props: meta };
});
