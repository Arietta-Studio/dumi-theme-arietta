import { Footer as Foot, FooterProps } from '@arietta-studio/ui';
import { Divider } from 'antd';
import { useResponsive } from 'antd-style';
import { FormattedMessage, useIntl } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import { githubSel, useSiteStore } from '@/store';

import { getColumns } from './columns';
import { useStyles } from './style';

const Footer = memo(() => {
  const { themeConfig, pkg } = useSiteStore((s) => s.siteData, isEqual);
  const { footerConfig, footer } = themeConfig;
  const githubUrl = useSiteStore(githubSel, shallow);
  const { styles, theme } = useStyles();
  const { mobile } = useResponsive();
  const intl = useIntl();

  if (!footer) return;

  const columns = footerConfig?.columns
    ? footerConfig?.columns
    : getColumns({ github: githubUrl || (pkg as any).homepage }, intl);

  if (footerConfig?.resources) columns[0] = footerConfig?.resources;
  if (footerConfig?.moreProducts) columns[3] = footerConfig?.moreProducts;

  const bottomFooter = intl.formatMessage({
    defaultMessage: 'Made with 🤯 by Arietta Studio',
    id: footerConfig?.bottom?.toString() || footer,
  });

  return (
    <Foot
      bottom={
        mobile ? (
          <Center className={styles.container}>
            <FormattedMessage id="footer.copyright" /> {new Date().getFullYear()}
            <Flexbox
              align={'center'}
              dangerouslySetInnerHTML={{ __html: bottomFooter }}
              horizontal
            ></Flexbox>
          </Center>
        ) : (
          <Center horizontal>
            <FormattedMessage id="footer.copyright" /> {new Date().getFullYear()}{' '}
            <Divider type={'vertical'} />
            <span dangerouslySetInnerHTML={{ __html: bottomFooter }} />
          </Center>
        )
      }
      columns={columns}
      contentMaxWidth={theme.contentMaxWidth}
      theme={theme.appearance as FooterProps['theme']}
    />
  );
});

export default Footer;
