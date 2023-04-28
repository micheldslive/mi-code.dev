import { styled } from '@/root/stitches.config';

export const Mailto = styled('a', {
  color: '$background',
  background: '$primary',
  border: '1px solid $primary',
  borderRadius: '$borderRadius',
  cursor: 'pointer',
  padding: '0.625rem',
  marginTop: '0.3125rem',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    background: 'transparent',
    borderColor: '$blue',
    color: '$blue'
  },
  '&:focus': {
    background: 'transparent',
    borderColor: '$blue',
    color: '$blue',
    outline: 'none'
  }
});
