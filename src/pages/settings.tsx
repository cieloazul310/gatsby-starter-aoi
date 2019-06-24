import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import MapStateHandler from '../components/MapStateHandler';
import { LocationWithState, createInitialAppState, MapState, initialMapState, AppState, Layer } from '../types';

interface Props {
  location: LocationWithState;
}

type State = MapState;

class SettingsPage extends React.Component<Props, State> {
  readonly state =
    !this.props.location.state || !this.props.location.state.appState ? initialMapState : this.props.location.state.appState.mapState;

  public render() {
    const { location } = this.props;
    const appState = createInitialAppState(location);
    const currentState: AppState = {
      ...appState,
      mapState: this.state
    };
    return (
      <Layout title="Settings" location={location} appState={currentState}>
        <Typography variant="h2" gutterBottom>
          Settings
        </Typography>
        <Typography variant="h5" gutterBottom>
          This is Settings Page for App.
        </Typography>
        <MapStateHandler mapState={this.state} />
      </Layout>
    );
  }
}

export default SettingsPage;
