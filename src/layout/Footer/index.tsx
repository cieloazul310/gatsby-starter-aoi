import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

import Socials from './Socials';
import { useSiteMetadata } from '../../graphql-hooks';

function Footer() {
  const { title, author } = useSiteMetadata();
  return (
    <footer>
      <Box py={4} textAlign="center">
        <Socials />
        <Typography variant="body2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="small">
          © {new Date().getFullYear()} {author} All rights reserved. Built with
          {` `}
          <MuiLink color="secondary" href="https://www.gatsbyjs.org">
            Gatsby
          </MuiLink>
        </Typography>
      </Box>
    </footer>
  );
}

export default Footer;
