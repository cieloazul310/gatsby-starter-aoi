import * as React from 'react';
import { graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
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

type State = AppState;

class IndexPage extends React.Component<Props, State> {
  readonly state = createInitialAppState(this.props.location);

  public render() {
    const { location } = this.props;
    console.log(location);
    const appState = createInitialAppState(location);
    return (
      <Layout title="Index Page" location={location} appState={appState}>
        <Typography variant="h2" gutterBottom>
          Gatsby Starter TypeScript App Shell
        </Typography>
        <Typography variant="h5" gutterBottom>
          Welcome to your new <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
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
        <p>Now go build something great.</p>
        <AppLink to="/page-2/" appState={appState}>
          Go to page 2
        </AppLink>
      </Layout>
    );
  }
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
