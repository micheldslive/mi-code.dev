import { useCallback } from 'react';
import { useThemeState } from '@/src/stores';
import { Moon, Sun } from './icons';
import { ThemeButton } from './styles';

export const Themming = () => {
  const { dark, setDark } = useThemeState();

  const handleDark = useCallback(() => {
    setDark(dark => !dark);
  }, []);

  return (
    <ThemeButton onClick={handleDark} aria-label='themming'>
      {dark ? <Moon /> : <Sun />}
    </ThemeButton>
  );
};
