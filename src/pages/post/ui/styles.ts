import DocViewer from 'react-doc-viewer';

import { styled } from '@/shared/config/stitches.config';

export const Wrapper = styled('div', {
  d: 'flex',
  ai: 'center',
  p: '20px',
  fd: 'column',
  maxW: '100vw',
});

export const Header = styled('div', {
  d: 'flex',
  fd: 'row',
  ai: 'center',
  w: '100%',
});

export const Title = styled('h1', {
  fs: '3rem',
  fw: '500',
  ta: 'center',
  w: '100%',
});

export const Button = styled('button', {
  fs: '18px',
  bc: 'red',
  br: '4px',
  c: 'white',
  p: '7px',
  fw: '500',
  minW: '150px',
});

export const DocViewerWrapper = styled('div', {
  mt: '50px',
  d: 'flex',
  jc: 'center',
  fd: 'column',
  ai: 'center',
  w: '100%',
  h: '100%',
});

export const FileInput = styled('input', {
  br: '4px',
  border: '1px solid black',
});

export const StyledDocViewer = styled(DocViewer, {
  w: '80%',
});
