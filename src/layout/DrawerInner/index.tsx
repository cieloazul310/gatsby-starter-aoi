import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// icons
import CloseIcon from '@material-ui/icons/Close';
// Drawer Contents
import Contents from './Contents';
import DrawerSharer from './DrawerSharer';
import StateHandler from '../../components/StateHandler';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(3),
    },
  })
);

interface Props {
  handleDrawer: () => any;
  contents?: JSX.Element | JSX.Element[];
}

function DrawerInner({ handleDrawer, contents }: Props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar}>
        <Hidden mdUp>
          <Tooltip title="Close">
            <IconButton onClick={handleDrawer}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
      </div>
      <Divider />
      {contents}
      <Contents />
      <Divider />
      <StateHandler />
      <Divider />
      <DrawerSharer />
      <Divider />
    </div>
  );
}

export default DrawerInner;
