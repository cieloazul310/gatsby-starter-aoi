import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { faLine } from '@fortawesome/free-brands-svg-icons';

import FabIcon from '../../components/FabIcon';
import useSocialShare from '../../utils/useSocialShare';

interface Props {
  title?: string;
}

function DrawerSharer({ title }: Props) {
  const twitterUrl = useSocialShare('twitter', title);
  const fbUrl = useSocialShare('facebook');
  const lineUrl = useSocialShare('line');
  return (
    <List subheader={<ListSubheader>Share</ListSubheader>}>
      <ListItem component="a" button href={twitterUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <TwitterIcon />
        </ListItemIcon>
        <ListItemText primary="Share on Twitter" />
      </ListItem>
      <ListItem button component="a" href={fbUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FacebookIcon />
        </ListItemIcon>
        <ListItemText primary="Share on Facebook" />
      </ListItem>
      <ListItem button component="a" href={lineUrl} target="_blank" rel="noopener noreferrer">
        <ListItemIcon>
          <FabIcon icon={faLine} />
        </ListItemIcon>
        <ListItemText primary="Share on LINE" />
      </ListItem>
    </List>
  );
}

export default DrawerSharer;
