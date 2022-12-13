import { createStitches, CSSProperties, PropertyValue } from '@stitches/react';

function stitchCSSProp(prop: keyof CSSProperties) {
  return (value: PropertyValue<typeof prop>) => ({
    [prop as string]: value,
  });
}

stitchCSSProp('marginTop');

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
