import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import { AppLink } from '../components/AppLink';
import SimpleCounterApp from '../components/SimpleCounterApp';
import reducer from '../utils/reducer';
import { LocationWithState, createInitialAppState } from '../types';

interface Props {
  location: LocationWithState;
}

function SecondPage({ location }: Props) {
  console.log(location);
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
      <SimpleCounterApp />
      <p>Welcome to page 2</p>
      <AppLink to="/" appState={appState}>
        Go back to the homepage
      </AppLink>
    </Layout>
  );
}

export default SecondPage;
