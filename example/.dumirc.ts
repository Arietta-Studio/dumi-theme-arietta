import { defineConfig } from 'dumi';
import { resolve } from 'node:path';

import { homepage, name } from '../package.json';

const isWin = process.platform === 'win32';

const themeConfig = {
  actions: [
    {
      icon: 'Github',
      link: homepage,
      openExternal: true,
      text: 'Github',
    },
    {
      link: '/components/example',
      text: 'Get Started',
      type: 'primary',
    },
  ],
  apiHeader: {
    docUrl: `{github}/tree/master/src/{atomId}/index.md`,
    match: ['/components'],
    pkg: name,
    sourceUrl: `{github}/tree/master/src/{atomId}/index.tsx`,
    type: 'doc',
  },
  description: 'Arietta UI is an open-source UI component library for building chatbot web apps',
  footer: 'footer.credits',
  giscus: {
    category: 'Q&A',
    categoryId: 'DIC_kwDOLh_T2c4CeEoC',
    repo: 'arietta-studio/dumi-theme-arietta',
    repoId: 'R_kgDOLh_T2Q',
  },
  hideHomeNav: true,
  name: 'DUMI',
  socialLinks: {
    discord: 'https://discord.gg/',
    github: homepage,
  },
  title: 'Arietta Dumi Theme',
};

export default defineConfig({
  alias: {
    '@': resolve(__dirname, '../src'),
    'dumi-theme-arietta': resolve(__dirname, '../src'),
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  define: {
    'process.env': process.env,
  },
  favicons: ['https://unpkg.com/@arietta-studio/assets-favicons@latest/assets/favicon.ico'],
  locales: [
    { id: 'en-US', name: 'English' },
    { id: 'lt-LT', name: 'Lietuvių' },
  ],
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  ssr: false,
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #000; }
  }`,
  ],
  themeConfig,
  title: 'Arietta Dumi Theme',
});
