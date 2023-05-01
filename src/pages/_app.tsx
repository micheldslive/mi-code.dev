import type { AppProps } from 'next/app';
import { CommandBarProvider } from '@/src/components';
import { ThemeProvider } from '@/src/styles';
import { appWithTranslation } from 'next-i18next';
import '@/src/styles/developer.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommandBarProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CommandBarProvider>
  );
}

export default appWithTranslation(MyApp);
