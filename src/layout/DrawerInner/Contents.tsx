import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import { AppLink } from '../../components/AppLink';
import { LocationWithState, AppState } from '../../types';

interface Props {
  location: LocationWithState;
  appState: AppState;
}

interface ListItemAppLinkProps extends Props {
  icon: JSX.Element;
  primary: string;
  to: string;
}

class ListItemAppLink extends React.PureComponent<ListItemAppLinkProps> {
  renderLink = React.forwardRef((itemProps: any, ref) => (
    <AppLink to={this.props.to} appState={this.props.appState} {...itemProps} innerRef={ref} />
  ));

  render() {
    const { icon, primary, to, location } = this.props;
    return (
      <ListItem button component={this.renderLink} selected={location.pathname === to}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={primary} />
      </ListItem>
    );
  }
}

function Contents({ location, appState }: Props) {
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>}>
      <ListItemAppLink to="/" primary="Top" location={location} appState={appState} icon={<Home />} />
      <ListItemAppLink to="/page-2/" primary="Page 2" location={location} appState={appState} icon={<MusicNote />} />
    </List>
  );
}

export default Contents;
