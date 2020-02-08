import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import CheckBox from '@material-ui/core/CheckBox';
import Switch from '@material-ui/core/Switch';
import useTheme from '@material-ui/core/styles/useTheme';
// icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LayersIcon from '@material-ui/icons/Layers';
import BorderIcon from '@material-ui/icons/BorderStyle';
import Bright4Icon from '@material-ui/icons/Brightness4';
import Bright5Icon from '@material-ui/icons/Brightness5';

import { AppState } from '../types';
import { Action } from '../utils/reducer';
import { useToggleDark } from '../utils/DispatchContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(6),
    },
  })
);

interface Props {
  appState: AppState;
  dispatch: React.Dispatch<Action>;
}

function MapStateHandler({ appState, dispatch }: Props) {
  //const classes = useStyles({});
  const [layerMenuOpen, handleLayerMenuOpen] = React.useState(false);
  const _handleLayerMenuOpen = () => {
    handleLayerMenuOpen(!layerMenuOpen);
  };
  const paletteType = useTheme().palette.type;
  const _toggleDark = useToggleDark();

  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItem button onClick={_handleLayerMenuOpen}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Layers" />
        {layerMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItem>
        <ListItemIcon>{paletteType === 'dark' ? <Bright4Icon /> : <Bright5Icon />}</ListItemIcon>
        <ListItemText primary="DarkMode" />
        <ListItemSecondaryAction>
          <Switch
            edge="end"
            onChange={_toggleDark}
            checked={paletteType === 'dark'}
            inputProps={{ 'aria-labelledby': 'switch-list-label-darkmode' }}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default MapStateHandler;
