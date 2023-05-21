import { darkTheme, styled } from '@/stitches.config';
import { type PropsWithChildren } from 'react';
import { useTheme } from '@/src/stores';

export const ThemeWrapper = styled('div', {
  background: '$background'
});

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { dark } = useTheme();
  return (
    <ThemeWrapper className={dark ? darkTheme : ''}>{children}</ThemeWrapper>
  );
};
