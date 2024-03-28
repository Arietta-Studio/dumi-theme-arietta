import { Icon } from '@arietta-studio/ui';
import { Link } from 'dumi';
import { Bug, FileClock, GitFork, Github } from 'lucide-react';
import { FooterColumn, FooterColumnItem } from 'rc-footer/es/column';
import { IntlShape } from 'react-intl';

interface GetColumnParameters {
  github?: string;
}
export const getColumns = ({ github }: GetColumnParameters, intl: IntlShape) => {
  const resources: FooterColumn = {
    items: [
      {
        description: intl.formatMessage({
          id: 'footer.resources.uiComponents',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.resources.uiComponentsTitle',
        }),
        url: 'https://github.com/arietta-studio/arietta-ui',
      },
      {
        description: intl.formatMessage({
          id: 'footer.resources.ariettaLint',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.resources.ariettaLintTitle',
        }),
        url: 'https://github.com/arietta-studio/arietta-lint',
      },
      {
        description: intl.formatMessage({
          id: 'title',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.resources.ariettaDumiTheme',
        }),
        url: 'https://github.com/arietta-studio/dumi-theme-arietta',
      },
    ],
    title: intl.formatMessage({
      id: 'footer.resources.title',
    }),
  };
  const community: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Bug} size="small" />,
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.community.reportBug',
        }),
        url: `${github}/issues/new/choose`,
      },
      github && {
        icon: <Icon icon={GitFork} size="small" />,
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.community.requestFeature',
        }),
        url: `${github}/issues/new/choose`,
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: intl.formatMessage({
      id: 'footer.community.title',
    }),
  };

  const help: FooterColumn = {
    items: [
      github && {
        icon: <Icon icon={Github} size="small" />,
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.help.github',
        }),
        url: github,
      },
      {
        LinkComponent: Link,
        icon: <Icon icon={FileClock} size="small" />,
        title: intl.formatMessage({
          id: 'footer.help.changelog',
        }),
        url: '/changelog',
      },
    ].filter(Boolean) as FooterColumnItem[],
    title: intl.formatMessage({
      id: 'footer.help.title',
    }),
  };

  const more: FooterColumn = {
    items: [
      {
        description: intl.formatMessage({
          id: 'footer.moreProducts.ariettaChat',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.moreProducts.ariettaChatTitle',
        }),
        url: 'https://github.com/arietta-studio/arietta-chat',
      },
      {
        description: intl.formatMessage({
          id: 'footer.moreProducts.readmeGenerator',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.moreProducts.readmeGeneratorTitle',
        }),
        url: 'https://readme-wizard.arietta-studio.ai',
      },
      {
        description: intl.formatMessage({
          id: 'footer.moreProducts.ariettaCompass',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.moreProducts.ariettaCompassTitle',
        }),
        url: 'https://github.com/arietta-studio/arietta-compass',
      },
      {
        description: intl.formatMessage({
          id: 'footer.moreProducts.ariettaI18n',
        }),
        openExternal: true,
        title: intl.formatMessage({
          id: 'footer.moreProducts.ariettaI18nTitle',
        }),
        url: 'https://github.com/arietta-studio/arietta-i18n',
      },
    ],
    title: intl.formatMessage({
      id: 'footer.moreProducts.title',
    }),
  };

  return [resources, community, help, more];
};
