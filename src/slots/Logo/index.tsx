import { Avatar, Logo as SiteLogo } from '@arietta-studio/ui';
import { Space } from 'antd';
import { useResponsive } from 'antd-style';
import { Link } from 'dumi';
import isEqual from 'fast-deep-equal';
import { memo } from 'react';

import { themeConfig } from '@/store/selectors/siteBasicInfo';
import { useSiteStore } from '@/store/useSiteStore';

import { useStyles } from './style';

const Logo = memo(() => {
  const config = useSiteStore(themeConfig, isEqual);
  const locale = useSiteStore((s) => s.locale, isEqual);
  const { styles, cx } = useStyles();
  const { mobile } = useResponsive();

  return (
    config && (
      <Link className={cx(styles)} to={'base' in locale ? locale.base : '/'}>
        {config.logo ? (
          <Space>
            <Avatar avatar={config.logo} size={mobile ? 32 : 36} />
            {config.name}
          </Space>
        ) : (
          <SiteLogo
            extra={config.name}
            size={mobile ? 32 : 36}
            type={config.logoType || 'combine'}
          />
        )}
      </Link>
    )
  );
});

export default Logo;
