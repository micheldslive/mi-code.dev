import { useKBar } from 'kbar';
import { useEffect, useState } from 'react';
import { useI18n } from '@/locales';
import { GeneralButton } from '@/components';

export const OpenCommandPalette = () => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);
  const { scopedT } = useI18n();
  const t = scopedT('common.kbar.start');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMac = /(Mac)/i.test(navigator.userAgent);
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <GeneralButton type='button' onClick={query.toggle}>
          {t('mobile')}
        </GeneralButton>
      );
    }
    if (isMac) {
      return (
        <GeneralButton type='button' onClick={query.toggle}>
          {t('mac', {
            keys: (
              <>
                <kbd>⌘</kbd> <kbd>K</kbd>
              </>
            )
          })}
        </GeneralButton>
      );
    }

    // (Windows, Linux)
    return (
      <GeneralButton type='button' onClick={query.toggle}>
        {t('pc', {
          keys: (
            <>
              <kbd>ctrl</kbd> <kbd>K</kbd>
            </>
          )
        })}
      </GeneralButton>
    );
  }
  return null;
};
