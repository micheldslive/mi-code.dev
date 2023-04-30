import { useKBar } from 'kbar';
import { useEffect, useState } from 'react';
import { GeneralButton } from '@/src/components';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';

export const OpenCommandPalette = () => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <GeneralButton type='button' onClick={query.toggle}>
          {t('common.kbar.start.mobile')}
        </GeneralButton>
      );
    }
    if (isMac) {
      return (
        <GeneralButton type='button' onClick={query.toggle}>
          {parse(
            t('common.kbar.start.desktop', {
              cmd: '⌘',
              key: 'K'
            })
          )}
        </GeneralButton>
      );
    }

    // (Windows, Linux)
    return (
      <GeneralButton type='button' onClick={query.toggle}>
        {parse(
          t('common.kbar.start.desktop', {
            cmd: 'ctrl',
            key: 'K'
          })
        )}
      </GeneralButton>
    );
  }
  return null;
};
