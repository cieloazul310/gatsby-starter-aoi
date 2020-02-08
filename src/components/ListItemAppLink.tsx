import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { AppState } from '../types';
import { AppLink } from './AppLink';

interface ListItemAppLinkProps {
  icon: JSX.Element;
  primary: string;
  to: string;
  selected: boolean;
  appState: AppState;
}

function ListItemAppLink({ icon, primary, to, selected, appState }: ListItemAppLinkProps) {
  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps: any, ref) => <AppLink to={to} appState={appState} {...itemProps} innerRef={ref} />),
    [to, appState]
  );

  return (
    <ListItem button component={renderLink} selected={selected}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export default ListItemAppLink;
