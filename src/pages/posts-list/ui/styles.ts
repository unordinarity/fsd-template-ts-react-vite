import { styled } from '@/shared/config/stitches.config';

export const Wrapper = styled('div', {
  d: 'flex',
  jc: 'center',
  ai: 'center',
  fd: 'column',
  gap: '20',
});

export const Title = styled('h1', {
  p: '40px',
  fs: '4rem',
  fw: 'bold',
});

export const PostsWrapper = styled('div', {
  w: '100%',
  d: 'flex',
  jc: 'center',
  ai: 'center',
  fd: 'column',
  gap: '30px',

  variants: {
    isMobile: {
      true: {
        w: '100%',
      },
      false: {
        w: '80%',
      },
    },
    qw: {},
  },
});

export const Post = styled('div', {
  w: '30%',
  p: '30px',
  d: 'flex',
  jc: 'flex-start',
  ai: 'center',
  fd: 'column',
  gap: '10px',
  fs: '3rem',
  fw: '500',
  border: '3px solid #808080',
  br: '10px',

  '&:hover': {
    border: '4px solid #0060ff',
    cursor: 'pointer',
  },
});

export const Description = styled('p', {
  fs: '2rem',
  fw: 'normal',
});
