import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';
import { useSiteMetadata } from '../../graphql-hooks';

function Copyrights() {
  const { title, author } = useSiteMetadata();
  return (
    <div>
      <Typography variant="body2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" component="small">
        © {new Date().getFullYear()} {author} All rights reserved. Built with
        {` `}
        <MuiLink color="secondary" href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">
          Gatsby
        </MuiLink>
      </Typography>
    </div>
  );
}

export default Copyrights;
