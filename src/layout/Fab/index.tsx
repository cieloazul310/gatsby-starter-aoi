import * as React from 'react';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import MenuIcon from '@material-ui/icons/Menu';

interface Props {
  className?: string;
  onClick?: () => void;
}

function FloationActionButton({ className, onClick = () => {} }: Props) {
  return (
    <Tooltip title="Menu" placement="top">
      <Fab className={className} onClick={onClick} color="secondary">
        <MenuIcon />
      </Fab>
    </Tooltip>
  );
}

export default FloationActionButton;
