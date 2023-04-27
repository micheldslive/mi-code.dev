import type { AppProps } from 'next/app';
import { CommandBar } from '@/components';
import { I18nProvider } from '@/locales';
import { useThemeState } from '@/stores';
import { darkTheme } from '@/root/stitches.config';
import { ThemeWrapper } from '@/styles';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const { dark } = useThemeState();
  return (
    <I18nProvider locale={pageProps.locale}>
      <CommandBar>
        <ThemeWrapper className={dark ? darkTheme : ''}>
          <Component {...pageProps} />
        </ThemeWrapper>
      </CommandBar>
    </I18nProvider>
  );
}

export default MyApp;
