import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import MapStateHandler from '../components/MapStateHandler';
import reducer from '../utils/reducer';
import { LocationWithState, createInitialAppState, MapState } from '../types';

interface Props {
  location: LocationWithState;
}

function SettingsPage({ location }: Props) {
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));

  return (
    <Layout title="Settings" location={location} appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        Settings
      </Typography>
      <Typography variant="h5" gutterBottom>
        This is Settings Page for App.
      </Typography>
      <MapStateHandler mapState={appState.mapState} dispatch={dispatch} />
    </Layout>
  );
}

export default SettingsPage;
