/* eslint-disable @typescript-eslint/no-misused-promises */
import { getLocaleProps } from '@/locales';
import { ContactTemplate, type ContactProps } from '@/templates';

const Contact = (pageProps: ContactProps) => {
  return <ContactTemplate {...pageProps} />;
};

export default Contact;

export const getStaticProps = getLocaleProps(() => {
  const meta = {
    primaryColor: 'purple',
    secondaryColor: 'cyan'
  };

  return { props: meta };
});
