import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import Settings from '@material-ui/icons/Settings';
const { useLocation } = require('@reach/router');

import { appNavigate } from '../components/AppLink';
import locationToRelativePath from '../utils/locationToRelativePath';
import { LocationWithState, AppState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
    },
  })
);

interface Props {
  appState: AppState;
}

function MobileNavigation({ appState }: Props) {
  const classes = useStyles({});
  const location: LocationWithState = useLocation();
  return (
    <BottomNavigation
      className={classes.root}
      value={locationToRelativePath(location)}
      showLabels
      onChange={(e, value) => {
        appNavigate(value, appState);
      }}
    >
      <BottomNavigationAction label="Top" value="" icon={<Home />} />
      <BottomNavigationAction label="page2" value="page-2/" icon={<MusicNote />} />
      <BottomNavigationAction label="Settings" value="settings/" icon={<Settings />} />
    </BottomNavigation>
  );
}

export default MobileNavigation;
