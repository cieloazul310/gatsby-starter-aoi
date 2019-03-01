import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';

import { appNavigate } from './AppLink';
import { LocationWithState, AppState } from '../types';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
    },
  });

interface Props extends WithStyles<typeof styles> {
  appState: AppState;
  location: LocationWithState;
}

const MobileNavigation: React.FC<Props> = ({
  classes,
  location,
  appState,
}: Props) => (
  <BottomNavigation
    className={classes.root}
    value={location.pathname}
    showLabels
    onChange={(e, value) => {
      appNavigate(value, appState);
    }}
  >
    <BottomNavigationAction label="Top" value="/" icon={<Home />} />
    <BottomNavigationAction
      label="page2"
      value="/page-2/"
      icon={<MusicNote />}
    />
  </BottomNavigation>
);

export default withStyles(styles)(MobileNavigation);
