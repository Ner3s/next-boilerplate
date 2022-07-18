import { render, RenderResult } from '@testing-library/react';
import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '.';

const renderTheme = (component: ReactElement): RenderResult => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};
export { renderTheme as render };
