import Image from 'next/image';
import { useI18n } from '@/locales';
import { Container, Section } from './styles';

export const Intro = () => {
  const { scopedT } = useI18n();
  const t = scopedT('pages.about');

  return (
    <Container>
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
        <h2>{t('bio')}</h2>
        <blockquote>
          <p>{t('description')}</p>
        </blockquote>
      </Section>
    </Container>
  );
};
