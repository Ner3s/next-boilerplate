import 'styled-components';

import themes from '.';

type Theme = typeof themes;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
