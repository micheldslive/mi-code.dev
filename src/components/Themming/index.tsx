import Sun from '@/public/static/images/sun.svg';
import Moon from '@/public/static/images/moon.svg';
import { useCallback } from 'react';
import { ThemeButton } from './styles';
import { useThemeState } from '@/stores';

export const Themming = () => {
  const { dark, setDark } = useThemeState();

  const handleDark = useCallback(() => {
    setDark(dark => !dark);
  }, []);

  return (
    <ThemeButton onClick={handleDark}>{dark ? <Moon /> : <Sun />}</ThemeButton>
  );
};
