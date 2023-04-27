import Head from 'next/head';
import Typewriter from 'typewriter-effect';
import { Layout, OpenCommandPalette } from '@/components';
import { useI18n } from '@/locales';
import { Container, Content, Title } from '@/styles';
import { Developer } from '@/components';

export const HomeTemplate = () => {
  const { scopedT } = useI18n();
  const t = scopedT('pages.home');

  return (
    <Layout>
      <Head>
        <title>{t('title')}</title>
        <meta content={t('title')} property='og:title' />
        <meta content={t('description')} name='description' />
        <meta content={t('description')} property='og:description' />
        <meta content='https://micode-dev.vercel.app/' property='og:url' />
      </Head>
      <Container>
        <Content>
          <div>
            <Title>{t('title')}</Title>
            <div>
              <strong>
                <Typewriter
                  options={{
                    strings: [t('meta.1'), t('meta.2'), t('meta.3')],
                    autoStart: true,
                    deleteSpeed: 80,
                    delay: 60,
                    loop: true
                  }}
                />
              </strong>
            </div>
            <OpenCommandPalette />
          </div>
          <div>
            <Developer />
          </div>
        </Content>
      </Container>
    </Layout>
  );
};
