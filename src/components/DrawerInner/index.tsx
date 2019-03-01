import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// icons
import CloseIcon from '@material-ui/icons/Close';

import Contents from './Contents';
import { AppState, LocationWithState } from '../../types';

const styles = (theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit * 3,
    },
  });

interface Props extends WithStyles<typeof styles> {
  handleDrawer: () => any;
  location: LocationWithState;
  appState: AppState;
}

const DrawerInner: React.FC<Props> = ({ classes, location, appState, handleDrawer }: Props) => (
  <div>
    <div className={classes.toolbar}>
      <Hidden mdUp>
        <IconButton onClick={handleDrawer}>
          <CloseIcon />
        </IconButton>
      </Hidden>
    </div>
    <Divider />
    <Contents location={location} appState={appState} />
  </div>
);

export default withStyles(styles)(DrawerInner);
