import { Icon } from '@arietta-studio/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';

interface GetColumnParameters {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParameters) => {
  const resources: FooterColumn = {
    items: [
      {
        description: 'UI Components',
        openExternal: true,
        title: 'Arietta UI',
        url: 'https://github.com/arietta-studio/arietta-ui',
      },
      {
        description: 'Awesome lint configs',
        openExternal: true,
        title: 'Arietta Lint',
        url: 'https://github.com/arietta-studio/arietta-lint',
      },
      {
        description: 'Arietta Dumi Theme',
        openExternal: true,
        title: 'Designed for Dumi 2',
        url: 'https://github.com/arietta-studio/dumi-theme-arietta',
      },
    ],
    title: 'Resources',
  };
  const community: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Bug} size="small" />,
        openExternal: true,
        title: 'Report Bug',
        url: `${github}/issues/new/choose`,
      },
      github && {
        icon: <Icon icon={GitFork} size="small" />,
        openExternal: true,
        title: 'Request Feature',
        url: `${github}/issues/new/choose`,
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Community',
  };

  const help: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Github} size="small" />,
        openExternal: true,
        title: 'GitHub',
        url: github,
      },
      {
        LinkComponent: Link,
        icon: <Icon icon={FileClock} size="small" />,
        title: 'Changelog',
        url: '/changelog',
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: 'Help',
  };

  const more: FooterColumn = {
    items: [
      {
        description: 'Next-gen chat platform',
        openExternal: true,
        title: '🤖 Arietta Chat',
        url: 'https://github.com/arietta-studio/arietta-chat',
      },
      {
        description: 'AI Readme Generator',
        openExternal: true,
        title: '📝 Readme Generator',
        url: 'https://readme-wizard.arietta-studio.ai',
      },
      {
        description: 'AI-Managed Git Workflows',
        openExternal: true,
        title: '💌 Arietta Compass',
        url: 'https://github.com/arietta-studio/arietta-compass',
      },
      {
        description: 'AI i18n CLI',
        openExternal: true,
        title: '🌐 Arietta i18n',
        url: 'https://github.com/arietta-studio/arietta-i18n',
      },
    ],
    title: 'More Products',
  };

  return [resources, community, help, more];
};
