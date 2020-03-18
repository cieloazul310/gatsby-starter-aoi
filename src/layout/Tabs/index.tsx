import * as React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface StyleProps {
  tabSticky: boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    root: ({ tabSticky }) => ({
      position: tabSticky ? 'sticky' : null,
      top: tabSticky ? 56 : null,
      backgroundColor: tabSticky ? theme.palette.background.default : null,
      zIndex: tabSticky ? theme.zIndex.mobileStepper : null,
      boxShadow: tabSticky ? theme.shadows[1] : null,
      [theme.breakpoints.up('sm')]: {
        top: tabSticky ? 64 : null,
      },
    }),
  })
);

interface Props {
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
  tabSticky?: boolean;
}

function Tabs({ children, tabSticky = false }: Props) {
  const classes = useStyles({ tabSticky });
  return (
    <div className={classes.root}>
      <nav>{children}</nav>
    </div>
  );
}

export default Tabs;
