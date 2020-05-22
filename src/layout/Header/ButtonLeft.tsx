import * as React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { ComponentViewports } from '../../utils/layoutViewports';

interface Props {
  componentViewports: ComponentViewports;
  toggleDrawer: () => void;
}

function ButtonLeft({ toggleDrawer, componentViewports: { SwipeableDrawer, PermanentDrawer } }: Props) {
  const showMenuButton = SwipeableDrawer !== false && PermanentDrawer === false;
  const _onBackButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    if (window) window.history.back();
  };
  return (
    <>
      <Hidden mdUp implementation="css">
        <Tooltip title="Back">
          <IconButton color="inherit" onClick={_onBackButtonClick} edge="start" aria-label="Get back to where you once belonged">
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
      </Hidden>
      <Hidden smDown implementation="css">
        {showMenuButton ? (
          <Tooltip title="Menu">
            <IconButton color="inherit" onClick={toggleDrawer} edge="start" aria-label="Open Menu">
              <MenuIcon />
            </IconButton>
          </Tooltip>
        ) : null}
      </Hidden>
    </>
  );
}

export default ButtonLeft;
