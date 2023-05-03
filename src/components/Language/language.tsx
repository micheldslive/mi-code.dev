import { useTranslation } from 'next-i18next';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import {
  CustomContainer,
  CustomOption,
  CustomSelect,
  GlobalLineIcon
} from './styles';

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const { push, pathname, query, asPath } = useRouter();

  const changeLanguage = useCallback(async (locale?: string) => {
    await i18n.changeLanguage(locale);
    void push({ pathname, query }, asPath, {
      locale
    });
  }, []);

  return (
    <CustomContainer aria-label='language'>
      <GlobalLineIcon />
      <CustomSelect
        defaultValue={i18n.language}
        onChange={event => void changeLanguage(event.target.value)}
      >
        <CustomOption value='pt'>pt</CustomOption>
        <CustomOption value='en'>en</CustomOption>
      </CustomSelect>
    </CustomContainer>
  );
};
