import * as React from 'react';
import Box from '@material-ui/core/Box';

import Socials from './Socials';
import Copyrights from './Copyrights';

function Footer() {
  return (
    <footer>
      <Box px={2} py={4} textAlign="center">
        <Socials />
        <Copyrights />
      </Box>
    </footer>
  );
}

export default Footer;
