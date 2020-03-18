import * as React from 'react';
import Layout, { LayoutProps, viewportsHelper } from '../../layout';

function FullWidthLayout({ children, componentViewports, ...props }: LayoutProps) {
  const fullWidthViewports = viewportsHelper({
    ...componentViewports,
    SwipeableDrawer: true,
    PermanentDrawer: false,
    Fab: true,
  });
  return (
    <Layout componentViewports={fullWidthViewports} {...props}>
      {children}
    </Layout>
  );
}

export default FullWidthLayout;
