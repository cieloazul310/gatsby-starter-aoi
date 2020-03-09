import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Layout from '../layout';
import AppLink from '../components/AppLink';
import CounterButton from '../components/CounterButton';
import LoremIpsum from '../components/lorem-ipsum/LoremIpusm';
import { useSiteMetadata } from '../graphql-hooks';
import { useAppState } from '../utils/AppStateContext';

function IndexPage() {
  const { count } = useAppState();
  const { title } = useSiteMetadata();

  return (
    <Layout maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Gatsby Starter TypeScript App Shell
      </Typography>
      <Typography variant="h5" gutterBottom>
        Welcome to your new <strong>{title}</strong> site.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Current Value: {count}
      </Typography>
      <Box py={2}>
        <ButtonGroup variant="contained">
          <CounterButton countaction="INCREMENT" color="primary">
            Increment
          </CounterButton>
          <CounterButton countaction="DECREMENT" color="secondary">
            Decrement
          </CounterButton>
          <CounterButton countaction="RESET_COUNT" color="default">
            RESET
          </CounterButton>
        </ButtonGroup>
      </Box>
      <LoremIpsum paragraph />
      <Typography variant="body1">
        <AppLink to="/page-2/">Go to page 2</AppLink>
      </Typography>
    </Layout>
  );
}

export default IndexPage;
