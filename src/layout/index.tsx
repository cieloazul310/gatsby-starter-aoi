import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Fab from '@material-ui/core/Fab';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';
import useTheme from '@material-ui/core/styles/useTheme';

import Header from './Header';
import MobileNavigation from './MobileNavigation';
import DrawerInner from './DrawerInner';
import { Action } from '../utils/reducer';
import { drawerWidth } from './drawerWidth';
import { LocationWithState, AppState } from '../types';
import { LayoutQuery } from '../../types/graphql-types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    main: {
      width: '100%',
      paddingTop: theme.mixins.toolbar.minHeight,
      [theme.breakpoints.down('xs')]: {
        paddingBottom: 56,
      },
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      ['@media (min-width:600px)']: {
        paddingTop: 64,
      },
    },
    content: {
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
      '@global': {
        a: {
          color: theme.palette.secondary.main,
          textDecoration: 'none',
          '&:hover': {
            color: theme.palette.secondary.light,
            textDecoration: 'underline',
          },
        },
      },
    },
    footer: {
      textAlign: 'center',
      padding: `${theme.spacing(4)}px ${theme.spacing(2)}px`,
    },
    menuFab: {
      position: 'fixed',
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        bottom: `calc(${theme.spacing(2)}px + 56px)`,
      },
    },
  })
);

interface Props {
  dispatch: React.Dispatch<Action>;
  location: LocationWithState;
  appState: AppState;
  title?: string;
  children: JSX.Element | JSX.Element[];
  drawerContents?: JSX.Element[];
}

function Layout({ children, title, appState, location, drawerContents, dispatch }: Props) {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
        }
      }
    }
  `);
  const classes = useStyles({});
  const [drawerOpen, toggleDrawer] = React.useState(false);
  const _toggleDrawer = () => {
    toggleDrawer(!drawerOpen);
  };
  const paletteType = useTheme().palette.type;

  return (
    <div className={classes.root}>
      <Helmet
        title={title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: data.site.siteMetadata.description,
          },
          { name: 'keywords', content: 'sample, something' },
          { name: 'twitter:card', content: 'summary' },
          {
            name: 'twitter:title',
            content: title ? `${title} | ${data.site.siteMetadata.title}` : data.site.siteMetadata.title,
          },
          {
            name: 'twitter:description',
            content: data.site.siteMetadata.description,
          },
        ]}
      />
      <Header title={title || data.site.siteMetadata.title} location={location} toggleDrawer={_toggleDrawer} />
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            onOpen={_toggleDrawer}
            onClose={_toggleDrawer}
            open={drawerOpen}
          >
            <DrawerInner
              location={location}
              appState={appState}
              handleDrawer={_toggleDrawer}
              contents={drawerContents}
              dispatch={dispatch}
            />
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
            <DrawerInner
              location={location}
              appState={appState}
              handleDrawer={_toggleDrawer}
              contents={drawerContents}
              dispatch={dispatch}
            />
          </Drawer>
        </Hidden>
      </nav>
      <div className={classes.main}>
        <Container maxWidth="md">
          <main>
            <div className={classes.content}>{children}</div>
          </main>
          <footer>
            <div className={classes.footer}>
              <Typography variant="body2">
                © {new Date().getFullYear()}, Built with
                {` `}
                <Link color="secondary" href="https://www.gatsbyjs.org">
                  Gatsby
                </Link>
              </Typography>
            </div>
          </footer>
          <Hidden mdUp implementation="css">
            <Tooltip title="Menu" placement="top">
              <Fab className={classes.menuFab} onClick={_toggleDrawer} color={paletteType === 'dark' ? 'default' : 'secondary'}>
                <MenuIcon />
              </Fab>
            </Tooltip>
          </Hidden>
        </Container>
      </div>
      <Hidden smUp implementation="css">
        <MobileNavigation location={location} appState={appState} />
      </Hidden>
    </div>
  );
}

export default Layout;
