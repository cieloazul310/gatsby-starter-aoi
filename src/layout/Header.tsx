import * as React from 'react';
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
import { drawerWidth } from './drawerWidth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      backgroundColor: theme.palette.type === 'dark' ? '#222' : null,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : null,
      transition: theme.transitions.create('background'),
    },
    title: {
      flex: 1,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  })
);

interface Props {
  title: string;
  toggleDrawer: () => any;
}

function Header({ title, toggleDrawer }: Props) {
  const classes = useStyles();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Hidden xsDown mdUp implementation="css">
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Typography className={classes.title} variant="h6" component="h1" color="inherit">
          {title}
        </Typography>
        <Hidden smDown implementation="css">
          <ShareButtons color="inherit" title={title} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;