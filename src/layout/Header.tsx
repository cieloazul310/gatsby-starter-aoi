import * as React from 'react';
import classNames from 'classnames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// icons
import MenuIcon from '@material-ui/icons/Menu';
import ShareButtons from './ShareButtons';
import { LocationWithState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: 1,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }
  })
);

interface Props {
  title: string;
  className: string;
  location: LocationWithState;
  toggleDrawer: () => any;
}

function Header({ className, title, location, toggleDrawer }: Props) {
  const classes = useStyles({});
  return (
    <AppBar className={classNames(className)}>
      <Toolbar>
        <Hidden xsDown mdUp>
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Typography className={classes.title} variant="h6" component="h1" color="inherit">
          {title}
        </Typography>
        <Hidden smDown>
          <ShareButtons color="inherit" location={location} title={title} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
