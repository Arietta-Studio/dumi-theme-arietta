import { Features, FeaturesProps, Snippet } from '@arietta-studio/ui';
import { FormattedMessage, useIntl } from 'dumi';
import { Palette, Smartphone, Zap } from 'lucide-react';
import React from 'react';
import { Center } from 'react-layout-kit';

export default () => {
  const intl = useIntl();

  // intl.formatMessage(
  //   {
  //     id: 'welcome',
  //   },
  // );

  console.log(
    intl.formatMessage({
      defaultMessage:
        'Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options.',
      id: 'themeable.description',
    }),
    'intl.formatMessage',
  );

  const items: FeaturesProps['items'] = [
    {
      description: intl.formatMessage({
        defaultMessage:
          'Based on antd v5, custom algorithms for light and dark themes are provided by default, offering aesthetically pleasing and user-friendly options.',
        id: 'themeable.description',
      }),
      icon: Palette,
      title: intl.formatMessage({ defaultMessage: 'Themeable', id: 'themeable.title' }),
    },
    {
      description: intl.formatMessage({
        defaultMessage:
          'This theme package adopts modern design techniques, making the documents more intuitive, readable, and user-friendly.',
        id: 'modern.description',
      }),
      icon: Zap,
      title: intl.formatMessage({ defaultMessage: 'Modern', id: 'modern.title' }),
    },
    {
      description: intl.formatMessage({
        defaultMessage:
          'Well-adapted for mobile devices. With the flexible style solution based on CSSinJS, multiple layout options are easily implemented.',
        id: 'mobileAdapted.description',
      }),
      icon: Smartphone,
      title: intl.formatMessage({ defaultMessage: 'Mobile-Adapted', id: 'mobileAdapted.title' }),
    },
  ];

  return (
    <Center gap={32}>
      <Center>
        <h2 style={{ fontSize: 20 }}>
          <FormattedMessage id="welcome" />
        </h2>

        <Snippet language={'bash'}>{'$ bun add dumi dumi-theme-arietta'}</Snippet>
      </Center>
      <Features items={items} />
    </Center>
  );
};
