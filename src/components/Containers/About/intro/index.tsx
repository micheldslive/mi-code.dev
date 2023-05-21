import Image from 'next/image';
import { Container, Section } from './styles';
import { useTranslation } from 'next-i18next';

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <Container aria-label='intro'>
      <Section>
        <Image
          alt='Michel Domingos'
          src='/static/images/micheldslive.jpg'
          width='300'
          height='406'
          priority
        />
      </Section>
      <Section>
        <h2>{t('pages.about.bio')}</h2>
        <blockquote>
          <p>{t('pages.about.description')}</p>
        </blockquote>
      </Section>
    </Container>
  );
};
