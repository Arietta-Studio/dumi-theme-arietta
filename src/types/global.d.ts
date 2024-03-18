import type { AriettaCustomStylish, AriettaCustomToken } from '@arietta-studio/ui';
import 'antd-style';
import { AntdToken } from 'antd-style/lib/types/theme';

import { SiteCustomToken } from '@/styles/customToken';

declare module 'antd-style' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomToken extends AriettaCustomToken, SiteCustomToken {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface CustomStylish extends AriettaCustomStylish {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends AntdToken, AriettaCustomToken, SiteCustomToken {}
}
