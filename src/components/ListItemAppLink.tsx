import * as React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { AppLink } from './AppLink';

interface ListItemAppLinkProps {
  icon: JSX.Element;
  primary: string;
  to: string;
  selected: boolean;
}

function ListItemAppLink({ icon, primary, to, selected }: ListItemAppLinkProps) {
  const renderLink = React.useMemo(() => React.forwardRef((itemProps: any, ref) => <AppLink to={to} {...itemProps} innerRef={ref} />), [
    to,
  ]);

  return (
    <ListItem button component={renderLink} selected={selected}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export default ListItemAppLink;
