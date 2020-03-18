import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../layout';
import StateHandler from '../layout/DrawerInner/StateHandler';

function SettingsPage() {
  return (
    <Layout title="Settings">
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
