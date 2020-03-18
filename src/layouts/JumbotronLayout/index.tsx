import * as React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout, { LayoutProps } from '../../layout';

type Props = {
  jumbotron: JSX.Element | JSX.Element[];
} & LayoutProps;

export default function JumbotronLayout({ jumbotron, disableGutters, children, maxWidth = false, ...props }: Props) {
  return (
    <Layout maxWidth={false} disableGutters disablePaddingTop {...props}>
      {jumbotron}
      <Container maxWidth={maxWidth} disableGutters={disableGutters}>
        <Box py={4}>{children}</Box>
      </Container>
    </Layout>
  );
}
