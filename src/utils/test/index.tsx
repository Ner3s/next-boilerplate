import { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export * from '@testing-library/react';
export { customRender as render, userEvent };
