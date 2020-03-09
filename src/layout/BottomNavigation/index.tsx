import * as React from 'react';
import { navigate, withPrefix } from 'gatsby';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// icons
import Home from '@material-ui/icons/Home';
import MusicNote from '@material-ui/icons/MusicNote';
import Settings from '@material-ui/icons/Settings';
import { useLocation } from '@reach/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
    },
  })
);

function MobileNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const _onChange = (event: React.ChangeEvent, value: string) => {
    navigate(value);
  };
  return (
    <BottomNavigation className={classes.root} value={withPrefix(location.href)} showLabels onChange={_onChange}>
      <BottomNavigationAction label="Top" value="" icon={<Home />} />
      <BottomNavigationAction label="page2" value="/page-2/" icon={<MusicNote />} />
      <BottomNavigationAction label="Settings" value="/settings/" icon={<Settings />} />
    </BottomNavigation>
  );
}

export default MobileNavigation;
