import * as React from 'react';
import Typography from '@material-ui/core/Typography';
const { useLocation } = require('@reach/router');
import Layout from '../layout';
import StateHandler from '../components/StateHandler';
import reducer from '../utils/reducer';
import { LocationWithState, createInitialAppState } from '../types';
/*
interface Props {
  location: LocationWithState;
}
*/
function SettingsPage() {
  const location: LocationWithState = useLocation();
  const [appState, dispatch] = React.useReducer(reducer, createInitialAppState(location));

  return (
    <Layout title="Settings" appState={appState} dispatch={dispatch}>
      <Typography variant="h2" gutterBottom>
        Settings
      </Typography>
      <Typography variant="h5" gutterBottom>
        This is Settings Page for App.
      </Typography>
      <StateHandler />
    </Layout>
  );
}

export default SettingsPage;
