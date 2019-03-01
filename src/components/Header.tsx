import * as React from 'react';
import classNames from 'classnames';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
// icons
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
  });

interface Props extends WithStyles<typeof styles> {
  title: string;
  className: string;
  toggleDrawer: () => any;
}

const Header: React.FC<Props> = ({
  classes,
  className,
  title,
  toggleDrawer,
}: Props) => (
  <AppBar className={classNames(className)}>
    <Toolbar>
      <Hidden xsDown mdUp>
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
      </Hidden>
      <Typography variant="h6" component="h1" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Header);
