import Head from 'next/head';
import { Base, Mailto } from '@/components';
import { useI18n } from '@/locales';
import { stripHtml } from '@/utils';

export interface ContactProps {
  primaryColor: string;
  secondaryColor: string;
}

export const ContactTemplate = ({
  primaryColor,
  secondaryColor
}: ContactProps) => {
  const { scopedT } = useI18n();
  const t = scopedT('pages.contact');

  return (
    <Base
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      title={t('title')}
      tagline={t('tagline')}
    >
      <Head>
        <title>{t('title')}</title>
        <meta content={t('title')} property='og:title' />
        <meta content={stripHtml(t('description'))} name='description' />
        <meta content={stripHtml(t('description'))} property='og:description' />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
      </Head>

      <div>
        <p dangerouslySetInnerHTML={{ __html: t('description') }} />
        <Mailto href='mailto:micheldslive@gmail.com'>{t('email')}</Mailto>
      </div>
    </Base>
  );
};
