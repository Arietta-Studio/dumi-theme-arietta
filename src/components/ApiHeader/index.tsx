import { Icon, Snippet } from '@arietta-studio/ui';
import { Divider, Space, Typography } from 'antd';
import { useResponsive } from 'antd-style';
import { Edit3, Github } from 'lucide-react';
import { type ReactNode, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ApiHeaderConfig } from '@/types';

import { useStyles } from './style';

/**
 * @title ApiHeaderProps
 * @category Props
 * @description ApiHeader
 */
export interface ApiHeaderProps extends ApiHeaderConfig {
  /**
   * @title
   * @description ApiHeader
   */
  componentName?: string;
  /**
   * @title
   * @description
   * @default false
   */
  defaultImport?: boolean;
  /**
   * @title
   * @description ApiHeader
   */
  description?: string;
  /**
   * @title
   * @description ApiHeader
   */
  title: string;
}
/**
 * @title ApiHeader
 */

export interface ApiTitleProps extends ApiHeaderProps {
  /**
   * @title
   * @description
   */
  serviceList?: ServiceItem[];
  /**
   * @title
   */
  title: string;
}

export interface ServiceItem {
  /**
   * @title
   */
  children: string;
  /**
   * @title
   */
  icon: ReactNode;
  /**
   * @title
   */
  label: string;
  /**
   * @title
   */
  url: string;
}

export const ApiHeader = memo<ApiTitleProps>(
  ({
    title,
    type,
    componentName,
    description,
    defaultImport,
    pkg,
    sourceUrl,
    docUrl,
    serviceList = [],
  }) => {
    const { styles } = useStyles();
    const { mobile } = useResponsive();
    const isDoc = type === 'doc';

    const items = [
      sourceUrl && {
        children: 'Source',
        icon: <Icon icon={Github} />,
        url: sourceUrl,
      },
      docUrl && {
        children: 'Edit',
        icon: <Icon icon={Edit3} />,
        url: docUrl,
      },
    ].filter(Boolean) as ServiceItem[];

    const importString = defaultImport
      ? `import ${componentName} from '${pkg}';`
      : `import { ${componentName} } from '${pkg}';`;

    return (
      <Flexbox id={'api-header'}>
        <Typography.Title className={styles.title}>{title}</Typography.Title>
        {description && (
          <div>
            <Typography.Text className={styles.desc} type={'secondary'}>
              {description}
            </Typography.Text>
          </div>
        )}
        {!isDoc && (
          <Flexbox gap={mobile ? 16 : 24} style={{ marginTop: 16 }}>
            {componentName && (
              <div style={{ display: 'flex' }}>
                <Snippet spotlight>{importString}</Snippet>
              </div>
            )}
            <Divider dashed style={{ margin: '2px 0' }} />
            <Flexbox distribution={'space-between'} gap={mobile ? 24 : 0} horizontal={!mobile}>
              <Space split={<Divider type={'vertical'} />} wrap>
                {serviceList.map((item) => (
                  <a
                    href={item.url}
                    key={item.label}
                    rel="noreferrer"
                    target={'_blank'}
                    title={item.label}
                  >
                    <Flexbox align={'center'} className={styles.text} gap={8} horizontal>
                      {item.icon}
                      {item.children}
                    </Flexbox>
                  </a>
                ))}
              </Space>
              <Space className={styles.meta} split={<Divider type={'vertical'} />}>
                {items.map((item, index) => (
                  <a href={item.url} key={index} rel="noreferrer" target={'_blank'}>
                    <Flexbox align={'center'} className={styles.text} gap={8} horizontal>
                      {item.icon}
                      {item.children}
                    </Flexbox>
                  </a>
                ))}
              </Space>
            </Flexbox>
          </Flexbox>
        )}
      </Flexbox>
    );
  },
);
