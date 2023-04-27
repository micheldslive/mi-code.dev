import { useEffect, useState } from 'react';
import { GeneralButton } from '@/components';

export const ShortcutError = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return (
        <GeneralButton as='a' href='/'>
          Tap to go home →
        </GeneralButton>
      );
    }

    return (
      <GeneralButton as='a' href='/'>
        Press <kbd>G</kbd> <kbd>H</kbd> to go home →
      </GeneralButton>
    );
  }

  return null;
};
