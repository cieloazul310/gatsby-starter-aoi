import * as React from 'react';
import Layout, { LayoutProps } from '../../layout';

interface Props extends LayoutProps {
  tabSticky?: boolean;
}

function TabPageLayout({ children, maxWidth = 'xl', disablePaddingTop = true, disableGutters = true, ...props }: Props) {
  return (
    <Layout maxWidth={maxWidth} disablePaddingTop={disablePaddingTop} disableGutters={disableGutters} {...props}>
      {children}
    </Layout>
  );
}

export default TabPageLayout;
