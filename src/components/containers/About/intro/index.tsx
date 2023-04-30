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
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAARElEQVQImRXGoQ0AIRBFwXcki1iN2GIICXXSE4WsQyM+uVFDRMjMVGuVu+v7M+fknMPemyKJMQatNe69lLUWvXcyE4AHFPwXwbTvwncAAAAASUVORK5CYII='
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
