import Head from 'next/head';
import { Base, Career, Intro } from '@/components';
import { useI18n } from '@/locales';
import { stripHtml } from '@/utils';

export interface AboutProps {
  imagePath: string;
  primaryColor: string;
  secondaryColor: string;
}

export const AboutTemplate = ({
  imagePath,
  primaryColor,
  secondaryColor
}: AboutProps) => {
  const { scopedT } = useI18n();
  const t = scopedT('pages.about');
  return (
    <Base
      tagline={t('tagline')}
      title={t('title')}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <Head>
        <title>{t('title')}</title>
        <meta content={t('title')} property='og:title' />
        <meta content={stripHtml(t('description'))} name='description' />
        <meta content={stripHtml(t('description'))} property='og:description' />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
        <meta
          content={`https://micode-dev.vercel.app/${imagePath}`}
          property='og:image'
        />
      </Head>

      <Intro />

      <h2>{t('career')}</h2>
      <Career />
    </Base>
  );
};
