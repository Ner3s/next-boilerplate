const family = {
  default: "'Open Sans', sans-serif"
} as const;

const sizes = {
  xxsmall: '1rem',
  xsmall: '1.2rem',
  small: '1.6rem',
  normal: '1.8rem',
  medium: '2.4rem',
  large: '3.2rem',
  xlarge: '4.0rem',
  xxlarge: '4.8rem',
  huge: '5.6rem',
  xhuge: '6.4rem',
  xxhuge: '7.2rem',
  hero: '8.0rem',
  xhero: '8.8rem',
  xxhero: '9.6rem'
} as const;

const weight = {
  light: 300,
  normal: 400,
  bold: 600
} as const;

export const font = {
  family,
  sizes,
  weight
} as const;
