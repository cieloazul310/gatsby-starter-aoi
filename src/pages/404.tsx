import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { useLocation } from '@reach/router';

import Layout from '../layout';
import { AppLink } from '../components/AppLink';
function NotFoundPage() {
  const location = useLocation();
  return (
    <Layout title="Not Found">
      <Typography variant="h2" gutterBottom>
        NOT FOUND
      </Typography>
      <Typography variant="h5" gutterBottom>
        <code>{location.pathname}</code> doesn&#39;t exist.
      </Typography>
      <AppLink to="/">Top Page</AppLink>
    </Layout>
  );
}

export default NotFoundPage;
