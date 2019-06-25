import * as React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import reducer from '../utils/reducer';
import { LocationWithState, createInitialAppState, AppState } from '../types';

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: LocationWithState;
}

function IndexPage({ data, location }: Props) {
  console.log(location);
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));

  return (
    <Layout title="Index Page" location={location} appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        Gatsby Starter TypeScript App Shell
      </Typography>
      <Typography variant="h5" gutterBottom>
        Welcome to your new <strong>{data.site.siteMetadata.title}</strong> site.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Features
      </Typography>
      <Typography variant="body1">Now go build something great.</Typography>
      <p>Now go build something great.</p>
      <Typography variant="body1">昔々あるところにお爺さんとお婆さんが平和に暮らしておったとさ。</Typography>
      <p>昔々あるところにお爺さんとお婆さんが平和に暮らしておったとさ。</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <p>Now go build something great.</p>
      <AppLink to="/page-2/" appState={appState}>
        Go to page 2
      </AppLink>
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
