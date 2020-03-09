import * as React from 'react';
import { withPrefix } from 'gatsby';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// icons
import HomeIcon from '@material-ui/icons/Home';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import ListItemAppLink from '../../components/ListItemAppLink';
import { useLocation } from '@reach/router';

function Contents() {
  const { pathname } = useLocation();
  return (
    <List subheader={<ListSubheader>Contents</ListSubheader>} role="menu">
      <ListItemAppLink to="/" button selected={pathname === withPrefix('/')} role="menuitem">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Top" />
      </ListItemAppLink>
      <ListItemAppLink to="/page-2/" button selected={pathname === withPrefix('/page-2/')} role="menuitem">
        <ListItemIcon>
          <SportsHandballIcon />
        </ListItemIcon>
        <ListItemText primary="Page-2" />
      </ListItemAppLink>
    </List>
  );
}

export default Contents;
