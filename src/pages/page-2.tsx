import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import reducer from '../utils/reducer';
import locationToRelativePath from '../utils/locationToRelativePath';
import { LocationWithState, createInitialAppState } from '../types';

interface Props {
  location: LocationWithState;
}

function SecondPage({ location }: Props) {
  console.log(location);
  console.log(locationToRelativePath(location));
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));

  return (
    <Layout title="Second Page" location={location} appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        Hi from the second page
      </Typography>
      <Typography variant="h3" gutterBottom>
        Typography h3 gutterBottom
      </Typography>
      <Typography variant="h4" gutterBottom>
        Typography h4 gutterBottom
      </Typography>
      <Typography variant="h5" gutterBottom>
        Typography h5 gutterBottom
      </Typography>
      <Typography variant="h6" gutterBottom>
        Typography h6 gutterBottom
      </Typography>
      <Typography variant="body1">Typography body1</Typography>
      <Typography variant="body2">Typography body2</Typography>
      <p>Welcome to page 2</p>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="default">
        Default
      </Button>
      <Button variant="outlined" color="default">
        Default
      </Button>
      <AppLink to="/" appState={appState}>
        Go back to the homepage
      </AppLink>
    </Layout>
  );
}

export default SecondPage;
