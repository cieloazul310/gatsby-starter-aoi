import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Collapse from '@material-ui/core/Collapse';
import Switch from '@material-ui/core/Switch';
import useTheme from '@material-ui/core/styles/useTheme';
// icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExposureIcon from '@material-ui/icons/Exposure';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RefreshIcon from '@material-ui/icons/Refresh';
import Bright4Icon from '@material-ui/icons/Brightness4';
import Bright5Icon from '@material-ui/icons/Brightness5';

import { useDispatch } from '../utils/AppStateContext';
import { useToggleDark } from '../utils/DispatchContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(6),
    },
  })
);

function StateHandler() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [collapseOpen, handleCollapseOpen] = React.useState(false);
  const _handleCollapseOpen = () => {
    handleCollapseOpen(!collapseOpen);
  };
  const paletteType = useTheme().palette.type;
  const _toggleDark = useToggleDark();
  const _incrementCount = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const _decrementCount = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const _resetCount = () => {
    dispatch({ type: 'RESET_COUNT' });
  };

  const isDark = React.useMemo(() => {
    return paletteType === 'dark';
  }, [paletteType]);

  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItem button onClick={_handleCollapseOpen}>
        <ListItemIcon>
          <ExposureIcon />
        </ListItemIcon>
        <ListItemText primary="Counter" />
        {collapseOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={collapseOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={_incrementCount}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Increment" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={_decrementCount}>
            <ListItemIcon>
              <RemoveIcon />
            </ListItemIcon>
            <ListItemText primary="Decrement" />
          </ListItem>
          <ListItem button className={classes.nested} onClick={_resetCount}>
            <ListItemIcon>
              <RefreshIcon />
            </ListItemIcon>
            <ListItemText primary="Reset" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem>
        <ListItemIcon>{isDark ? <Bright4Icon /> : <Bright5Icon />}</ListItemIcon>
        <ListItemText primary="DarkMode" />
        <ListItemSecondaryAction>
          <Switch edge="end" onChange={_toggleDark} checked={isDark} inputProps={{ 'aria-labelledby': 'switch-list-label-darkmode' }} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default StateHandler;
