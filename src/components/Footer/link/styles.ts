import Link from 'next/link';
import { styled } from '@/stitches.config';

export const Anchor = styled(Link, {
  color: '$secondary',
  display: 'flex',
  alignItems: 'center',
  gap: '0.3125rem',
  fontSize: '1rem',
  border: 0,
  marginLeft: '1.25rem',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1
  },
  '& svg': {
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    fill: '$primary',
    opacity: 1,
    width: '1rem',
    height: '1rem',
    transition: 'opacity $duration ease-in-out',
    '@bp2': { opacity: 0, fontSize: '1rem' }
  },
  '&:hover svg': {
    opacity: 1
  },
  variants: {
    type: {
      linkedin: {
        '&:hover': {
          color: '$linkedin'
        },
        '& svg': {
          fill: '$linkedin'
        }
      },
      email: {
        '&:hover': {
          color: '$primary'
        },
        '& svg': {
          fill: '$primary'
        }
      },
      github: {
        '&:hover': {
          color: '$github'
        },
        '& svg': {
          fill: '$github'
        }
      },
      instagram: {
        '&:hover': {
          color: '$instagram'
        },
        '& svg': {
          fill: '$instagram'
        }
      }
    }
  }
});

export const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' }
});
