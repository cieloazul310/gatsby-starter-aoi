import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import ListItemAppLink from '../../components/ListItemAppLink';
import locationToRelativePath from '../../utils/locationToRelativePath';
import { useLocation } from '@reach/router';

function Contents() {
  const location = useLocation();
  const currentPath = locationToRelativePath(location);
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>}>
      <ListItemAppLink to="/" primary="Top" icon={<Home />} selected={currentPath === ''} />
      <ListItemAppLink to="/page-2/" primary="Page 2" icon={<MusicNote />} selected={currentPath === 'page-2/'} />
    </List>
  );
}

export default Contents;
