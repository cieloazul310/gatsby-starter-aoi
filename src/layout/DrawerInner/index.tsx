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
import StateHandler from '../../components/StateHandler';
import { Action } from '../../utils/reducer';
import { AppState, LocationWithState } from '../../types';

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
  location: LocationWithState;
  appState: AppState;
  contents?: JSX.Element[];
  dispatch: React.Dispatch<Action>;
}

function DrawerInner({ location, appState, handleDrawer, contents, dispatch }: Props) {
  const classes = useStyles({});
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
      {contents
        ? contents.map((content, index, arr) =>
            index === arr.length - 1 ? (
              content
            ) : (
              <>
                {content}
                <Divider />
              </>
            )
          )
        : null}
      <Contents location={location} appState={appState} />
      <Divider />
      <StateHandler appState={appState} dispatch={dispatch} />
      <Divider />
    </div>
  );
}

export default DrawerInner;
