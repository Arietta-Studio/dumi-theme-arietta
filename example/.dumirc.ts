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
  footer: 'Made with 🤯 by Arietta Studio',
  giscus: {
    category: 'Q&A',
    categoryId: '', // TODO: Add categoryId
    repo: 'arietta-studio/arietta-ui',
    repoId: '', // TODO: Add repoId
  },
  name: 'DUMI',
  socialLinks: {
    discord: 'https://discord.gg/',
    github: homepage,
  },
  title: 'Dumi Theme Arietta Studio',
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
  locales: [{ id: 'en-US', name: 'English' }],
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
  title: 'Dumi Theme Arietta Studio',
});
