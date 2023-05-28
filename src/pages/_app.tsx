import type { AppProps } from 'next/app';
import { CommandBarProvider, ThemeProvider } from '@/src/providers';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { useMicodeStore } from '@/src/stores';
import { useChangeLanguage } from '@/src/utils';

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const { changeLanguage } = useChangeLanguage();
  const { locale } = useMicodeStore();

  useEffect(() => {
    setMounted(true);
    void changeLanguage(locale);
  }, []);

  if (!mounted) return null;

  return (
    <CommandBarProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CommandBarProvider>
  );
}

export default appWithTranslation(MyApp);
