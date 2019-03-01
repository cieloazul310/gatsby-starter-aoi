import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Header from '../components/Header';
import MobileNavigation from '../components/MobileNavigation';
import DrawerInner from '../components/DrawerInner';

import { LocationWithState, AppState } from '../types';

const drawerWidth = 280;
const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
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
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    header: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
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
      width: '100%',
      maxWidth: 800,
      margin: 'auto',
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    },
    footer: {
      textAlign: 'center',
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 2}px`,
    },
  });

interface Props extends WithStyles<typeof styles> {
  location: LocationWithState;
  appState: AppState;
  title?: string;
  children: JSX.Element | JSX.Element[];
}

interface State {
  readonly drawerOpen: boolean;
}

interface QueriedData {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      author: {
        name: string;
      };
    };
  };
}

class Layout extends React.Component<Props, State> {
  readonly state = {
    drawerOpen: false,
  };
  private _toggleDrawer = () => {
    this.setState(prev => ({
      drawerOpen: !prev.drawerOpen,
    }));
  };
  public render() {
    const { classes, children, title, appState, location } = this.props;
    const { drawerOpen } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query {
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
        `}
        render={(data: QueriedData) => (
          <div className={classes.root}>
            <Helmet
              title={
                title
                  ? `${title} | ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },
                { name: 'keywords', content: 'sample, something' },
                { name: 'twitter:card', content: 'summary' },
                {
                  name: 'twitter:title',
                  content: title
                    ? `${title} | ${data.site.siteMetadata.title}`
                    : data.site.siteMetadata.title,
                },
                {
                  name: 'twitter:description',
                  content: data.site.siteMetadata.description,
                },
              ]}
            />
            <Header
              className={classes.header}
              title={title || data.site.siteMetadata.title}
              toggleDrawer={this._toggleDrawer}
            />
            <nav className={classes.drawer}>
              <Hidden mdUp>
                <Drawer
                  classes={{ paper: classes.drawerPaper }}
                  variant="temporary"
                  onClose={this._toggleDrawer}
                  open={drawerOpen}
                >
                  <DrawerInner location={location} appState={appState} handleDrawer={this._toggleDrawer} />
                </Drawer>
              </Hidden>
              <Hidden smDown>
                <Drawer
                  classes={{ paper: classes.drawerPaper }}
                  variant="permanent"
                  open
                >
                  <DrawerInner location={location} appState={appState} handleDrawer={this._toggleDrawer} />
                </Drawer>
              </Hidden>
            </nav>
            <div className={classes.main}>
              <main>
                <div className={classes.content}>{children}</div>
              </main>
              <footer>
                <div className={classes.footer}>
                  <Typography variant="body2">
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </Typography>
                </div>
              </footer>
            </div>
            <Hidden smUp>
              <MobileNavigation location={location} appState={appState} />
            </Hidden>
          </div>
        )}
      />
    );
  }
}

export default withStyles(styles)(Layout);
