import Head from 'next/head';
import { Base, Mailto } from '@/src/components';
import { useTranslation } from 'next-i18next';
import { stripHtml } from '@/src/utils';
import { type DefaultProps } from '@/src/@types/types';

export type ContactProps = DefaultProps;

export const ContactTemplate = ({
  primaryColor,
  secondaryColor
}: ContactProps) => {
  const { t } = useTranslation();

  return (
    <Base
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
      title={t('pages.contact.title')}
      tagline={t('pages.contact.tagline')}
    >
      <Head>
        <title>{t('pages.contact.title')}</title>
        <meta content={t('pages.contact.title')} property='og:title' />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          name='description'
        />
        <meta
          content={stripHtml(t('pages.contact.description'))}
          property='og:description'
        />
        <meta content='https://micode-dev.vercel.app/about' property='og:url' />
      </Head>

      <div>
        <p
          dangerouslySetInnerHTML={{ __html: t('pages.contact.description') }}
        />
        <Mailto href='mailto:micheldslive@gmail.com'>
          {t('pages.contact.email')}
        </Mailto>
      </div>
    </Base>
  );
};
