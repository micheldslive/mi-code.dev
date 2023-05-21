import type { AppProps } from 'next/app';
import { CommandBarProvider, ThemeProvider } from '@/src/providers';
import { appWithTranslation } from 'next-i18next';

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
