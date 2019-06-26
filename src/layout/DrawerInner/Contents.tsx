import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { AppLink } from '../../components/AppLink';
import locationToRelativePath from '../../utils/locationToRelativePath';
import { LocationWithState, AppState } from '../../types';

interface Props {
  location: LocationWithState;
  appState: AppState;
}

interface ListItemAppLinkProps {
  icon: JSX.Element;
  primary: string;
  to: string;
  selected: boolean;
  appState: AppState;
}

interface QueriedData {
  site: {
    pathPrefix: string;
  };
}

class ListItemAppLink extends React.PureComponent<ListItemAppLinkProps> {
  renderLink = React.forwardRef((itemProps: any, ref) => (
    <AppLink to={this.props.to} appState={this.props.appState} {...itemProps} innerRef={ref} />
  ));

  render() {
    const { icon, primary, selected } = this.props;
    return (
      <ListItem button component={this.renderLink} selected={selected}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={primary} />
      </ListItem>
    );
  }
}

function Contents({ location, appState }: Props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            pathPrefix
          }
        }
      `}
      render={({ site }: QueriedData) => {
        const { pathPrefix } = site;
        const currentPath = locationToRelativePath(location, pathPrefix);
        return (
          <List subheader={<ListSubheader>Contents</ListSubheader>}>
            <ListItemAppLink to="/" primary="Top" appState={appState} icon={<Home />} selected={currentPath === '/'} />
            <ListItemAppLink
              to="/page-2/"
              primary="Page 2"
              appState={appState}
              icon={<MusicNote />}
              selected={currentPath === '/page-2/'}
            />
          </List>
        );
      }}
    />
  );
  /*
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>}>
      <ListItemAppLink to="/" primary="Top" location={location} appState={appState} icon={<Home />} />
      <ListItemAppLink to="/page-2/" primary="Page 2" location={location} appState={appState} icon={<MusicNote />} />
    </List>
  );
  */
}

export default Contents;
