import { getLocaleProps } from '@/locales';
import { HomeTemplate } from '@/templates';

const Home = () => {
  return <HomeTemplate />;
};

export default Home;
export const getStaticProps = getLocaleProps();
