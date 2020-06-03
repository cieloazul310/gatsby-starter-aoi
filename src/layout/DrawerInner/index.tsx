import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
// icons
import CloseIcon from '@material-ui/icons/Close';
// Drawer Contents
import Contents from './Contents';
import DrawerSharer from './DrawerSharer';
import StateHandler from './StateHandler';
import DrawerFooter from './DrawerFooter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
      },
    },
  })
);

interface Props {
  handleDrawer: () => void;
  contents?: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  title?: string;
}

function DrawerInner({ handleDrawer, contents, title }: Props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.toolbar}>
        <Tooltip title="Close">
          <IconButton onClick={handleDrawer} edge="start">
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Divider />
      {contents}
      <Divider />
      <Contents />
      <Divider />
      <StateHandler />
      <Divider />
      <DrawerSharer title={title} />
      <Divider />
      <DrawerFooter />
    </div>
  );
}

export default DrawerInner;
