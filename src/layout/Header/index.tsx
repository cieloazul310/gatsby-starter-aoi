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
import { useSiteMetadata } from '../../graphql-hooks';
import ShareButtons from './ShareButtons';

interface StylesProps {
  drawerWidth: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      },
      backgroundColor: theme.palette.type === 'dark' ? '#222' : null,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : null,
      transition: theme.transitions.create('background'),
    },
    title: {
      flex: 1,
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      lineHeight: 1.2,
    },
  })
);

interface Props {
  title: string;
  toggleDrawer: () => any;
  drawerWidth?: number;
}

function Header({ title, toggleDrawer, drawerWidth = 280 }: Props) {
  const classes = useStyles({ drawerWidth });
  const siteMetadata = useSiteMetadata();
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <Hidden xsDown mdUp implementation="css">
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer} edge="start">
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Typography className={classes.title} variant="h6" component="h1" color="inherit">
          {title || siteMetadata.title}
        </Typography>
        <Hidden smDown implementation="css">
          <ShareButtons color="inherit" title={title} />
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
