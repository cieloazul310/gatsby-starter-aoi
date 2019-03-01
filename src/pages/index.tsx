import * as React from 'react';
import { graphql } from 'gatsby';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import { LocationWithState, createInitialAppState } from '../types';

const styles = (theme: Theme) => createStyles({});

interface Props extends WithStyles<typeof styles> {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  location: LocationWithState;
}

class IndexPage extends React.PureComponent<Props> {
  public render() {
    const { classes, location } = this.props;
    console.log(location);
    const appState = createInitialAppState(location);
    return (
      <Layout title="Index Page" location={location} appState={appState}>
        <h1>Hi people</h1>
        <p>
          Welcome to your new{' '}
          <strong>{this.props.data.site.siteMetadata.title}</strong> site.
        </p>
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

export default withStyles(styles)(IndexPage);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
