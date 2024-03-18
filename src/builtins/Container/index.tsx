import { Alert } from 'antd';
import { type FC, type ReactNode } from 'react';

import { useStyles } from './style';

const Container: FC<{
  children: ReactNode;
  title?: string;
  type: 'info' | 'warning' | 'success' | 'error';
}> = ({ type, title, children }) => {
  const { styles, cx } = useStyles();

  return (
    <div className={styles.container} data-type={type}>
      <Alert
        className={styles.alert}
        description={
          <div
            className={cx(
              styles.desc,
              'markdown',
            )}
          >
            {children}
          </div>
        }
        message={title || type.toUpperCase()}
        showIcon
        type={type}
      />
    </div>
  );
};

export default Container;
