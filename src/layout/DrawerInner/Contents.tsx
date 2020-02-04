import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import ListItemAppLink from '../../components/ListItemAppLink';
import locationToRelativePath from '../../utils/locationToRelativePath';
import { LocationWithState, AppState } from '../../types';

interface Props {
  location: LocationWithState;
  appState: AppState;
}

function Contents({ location, appState }: Props) {
  const currentPath = locationToRelativePath(location);
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>}>
      <ListItemAppLink to="/" primary="Top" appState={appState} icon={<Home />} selected={currentPath === ''} />
      <ListItemAppLink to="/page-2/" primary="Page 2" appState={appState} icon={<MusicNote />} selected={currentPath === 'page-2/'} />
    </List>
  );
}

export default Contents;
