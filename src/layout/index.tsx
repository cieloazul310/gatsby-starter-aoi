import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container, { ContainerProps } from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';

// layout components are enable to override from your project
// https://www.gatsbyjs.org/docs/themes/shadowing/
import SEO from './SEO';
import Header from './Header';
import Tabs from './Tabs';
import DrawerInner from './DrawerInner';
import Footer from './Footer';

interface StylesProps {
  useBottomNav: boolean;
  drawerWidth: number;
}

const useStyles = makeStyles<Theme, StylesProps>((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => drawerWidth,
      },
    },
    drawerPaper: {
      transition: theme.transitions.create('background'),
      width: ({ drawerWidth }) => drawerWidth,
    },
    main: {
      width: '100%',
      paddingTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.down('xs')]: {
        paddingBottom: ({ useBottomNav }) => (useBottomNav ? 56 : null),
      },
      [theme.breakpoints.up('md')]: {
        width: ({ drawerWidth }) => `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: 64,
      },
    },
    menuFab: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        bottom: ({ useBottomNav }) => (useBottomNav ? `calc(${theme.spacing(2)}px + 56px)` : null),
      },
    },
  })
);

export interface LayoutProps extends ContainerProps {
  title?: string;
  description?: string;
  keywords?: string[];
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  disablePaddingTop?: boolean;
  drawerWidth?: number;
  drawerContents?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  tabs?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  bottomNavigation?: JSX.Element[] | (JSX.Element | JSX.Element[])[];
  tabSticky?: boolean;
}

function Layout({
  children,
  title,
  description,
  keywords,
  tabs,
  drawerContents,
  disablePaddingTop,
  bottomNavigation,
  tabSticky = false,
  drawerWidth = 280,
  ...options
}: LayoutProps) {
  const classes = useStyles({
    drawerWidth,
    useBottomNav: bottomNavigation !== undefined,
  });
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const _toggleDrawer = () => {
    toggleDrawer(!drawerOpen);
  };

  return (
    <Box display="flex">
      <SEO title={title} description={description} keywords={keywords} />
      <Header title={title} toggleDrawer={_toggleDrawer} drawerWidth={drawerWidth} />
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            onOpen={_toggleDrawer}
            onClose={_toggleDrawer}
            open={drawerOpen}
          >
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <DrawerInner handleDrawer={_toggleDrawer} contents={drawerContents} title={title} />
          </Drawer>
        </Hidden>
      </nav>
      <Box className={classes.main}>
        <Container {...options}>
          <Box pt={disablePaddingTop ? 0 : 4} pb={4}>
            {tabs ? <Tabs tabSticky={tabSticky}>{tabs}</Tabs> : null}
            <main>{children}</main>
            <Footer />
          </Box>
        </Container>
        <Hidden mdUp implementation="css">
          <Tooltip title="Menu" placement="top">
            <Fab className={classes.menuFab} onClick={_toggleDrawer} color="secondary">
              <MenuIcon />
            </Fab>
          </Tooltip>
        </Hidden>
      </Box>
      {bottomNavigation ? (
        <Hidden smUp implementation="css">
          {bottomNavigation}
        </Hidden>
      ) : null}
    </Box>
  );
}

export default Layout;
