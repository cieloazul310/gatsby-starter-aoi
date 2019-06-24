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
// icons
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LayersIcon from '@material-ui/icons/Layers';
import BorderIcon from '@material-ui/icons/BorderStyle';

import { layers, MapState } from '../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(6)
    }
  })
);

interface Props {
  mapState: MapState;
}

function MapStateHandler({ mapState }: Props) {
  const classes = useStyles({});
  const [layerMenuOpen, handleLayerMenuOpen] = React.useState(false);
  const _handleLayerMenuOpen = () => {
    handleLayerMenuOpen(!layerMenuOpen);
  };
  return (
    <List subheader={<ListSubheader>Map Handler</ListSubheader>}>
      <ListItem button onClick={_handleLayerMenuOpen}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Layers" />
        {layerMenuOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={layerMenuOpen} timeout="auto" unmountOnExit>
        <List disablePadding>
          {layers.map(layer => (
            <ListItem className={classes.nested} key={layer} button>
              <ListItemText primary={layer} />
              <ListItemSecondaryAction>
                <CheckBox checked={layer === mapState.layer} />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Collapse>
      <ListItem>
        <ListItemIcon>
          <BorderIcon />
        </ListItemIcon>
        <ListItemText primary="Border" />
        <ListItemSecondaryAction>
          <Switch checked={mapState.borderVisibility} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default MapStateHandler;
