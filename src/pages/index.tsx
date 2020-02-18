import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import CounterButton from '../components/CounterButton';
import LoremIpsum from '../components/lorem-ipsum/LoremIpusm';
import { useAppState } from '../utils/AppStateContext';

import { IndexQuery } from '../../graphql-types';

interface Props {
  //location: LocationWithState;
}

function IndexPage(props: Props) {
  console.log(props);
  const { count } = useAppState();
  const data = useStaticQuery<IndexQuery>(graphql`
    query Index {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout title="Index Page" maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Gatsby Starter TypeScript App Shell
      </Typography>
      <Typography variant="h5" gutterBottom>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Current Value: {count}
      </Typography>
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
      <LoremIpsum />
      <Typography variant="body1">
        <AppLink to="/page-2/">Go to page 2</AppLink>
      </Typography>
    </Layout>
  );
}

export default IndexPage;
