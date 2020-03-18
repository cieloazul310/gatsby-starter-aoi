import * as React from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import ShareButtons from './ShareButtons';

interface Props {
  title?: string;
}

function ButtonRight({ title }: Props) {
  return (
    <>
      <Hidden smDown implementation="css">
        <ShareButtons color="inherit" title={title} />
      </Hidden>
      <Hidden mdUp implementation="css">
        <Box p={1.5}>
          <Box width={24} height={24} mr={-1.5} />
        </Box>
      </Hidden>
    </>
  );
}

export default ButtonRight;
