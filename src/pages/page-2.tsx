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
      <SimpleCounterApp />
      <p>Welcome to page 2</p>
      <AppLink to="/" appState={appState}>
        Go back to the homepage
      </AppLink>
    </Layout>
  );
}

export default SecondPage;
