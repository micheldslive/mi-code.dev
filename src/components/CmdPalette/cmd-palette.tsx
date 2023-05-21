import { useKBar } from 'kbar';
import { useEffect, useState } from 'react';
import { GeneralButton } from '@/src/components';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';
import { getDeviceType } from '@/src/utils/getDeviceType';

export interface OpenCommandPalleteProps {
  type?: ReturnType<typeof getDeviceType>;
}

export const OpenCommandPalette = ({ type }: OpenCommandPalleteProps) => {
  const { query } = useKBar();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();
  const translation = {
    mobile: t('common.kbar.start.mobile'),
    mac: parse(
      t('common.kbar.start.desktop', {
        cmd: '⌘',
        key: 'K'
      })
    ),
    windows: parse(
      t('common.kbar.start.desktop', {
        cmd: 'ctrl',
        key: 'K'
      })
    )
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const device = type || getDeviceType();

  return (
    <GeneralButton
      type='button'
      onClick={query.toggle}
      aria-label='cmd-palette'
    >
      {translation[device]}
    </GeneralButton>
  );
};
