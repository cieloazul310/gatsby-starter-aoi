import * as React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemToggleDarkMode, { ListItemToggleUseSystemTheme } from '../../components/ListItemToggleDarkMode';
import { useSiteMetadata } from '../../graphql-hooks';

function StateHandler() {
  const { lang } = useSiteMetadata();
  return (
    <List subheader={<ListSubheader>State Handler</ListSubheader>}>
      <ListItemToggleDarkMode label={lang === 'ja' ? 'ダークモード' : 'Dark Mode'} />
      <ListItemToggleUseSystemTheme label={lang === 'ja' ? '自動ダークモード' : 'Auto Dark Mode'} />
    </List>
  );
}

export default StateHandler;
