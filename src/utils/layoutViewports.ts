import { Theme } from '@material-ui/core/styles';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { HiddenProps } from '@material-ui/core/Hidden';

const breakpoints: Breakpoint[] = ['xs', 'sm', 'md', 'lg', 'xl'];

//type HiddenPropsKeys = keyof HiddenProps;
//type Viewport = Exclude<HiddenPropsKeys, ('implementation' | 'initialWidth' | 'only')>;
export type Viewport = 'xsDown' | 'xsUp' | 'smDown' | 'smUp' | 'mdDown' | 'mdUp' | 'lgDown' | 'lgUp' | 'xlDown' | 'xlUp';
export type ViewDirection = 'Up' | 'Down';
export type Viewports = Viewport | boolean;

export interface ComponentViewports {
  SwipeableDrawer: Viewports;
  PermanentDrawer: Viewports;
  BottomNav: Viewports;
  Fab: Viewports;
}

export const defaultComponentViewports: ComponentViewports = {
  SwipeableDrawer: 'smDown',
  PermanentDrawer: 'mdUp',
  BottomNav: 'xsDown',
  Fab: 'smDown',
};

export function viewportsHelper(componentViewPorts: Partial<ComponentViewports>) {
  return componentViewPorts;
}

export function mergeViewports(componentViewports: Partial<ComponentViewports>): ComponentViewports {
  return componentViewports
    ? {
        SwipeableDrawer: pickViewports('SwipeableDrawer'),
        PermanentDrawer: pickViewports('PermanentDrawer'),
        BottomNav: pickViewports('BottomNav'),
        Fab: pickViewports('Fab'),
      }
    : defaultComponentViewports;

  function pickViewports(key: 'SwipeableDrawer' | 'PermanentDrawer' | 'BottomNav' | 'Fab') {
    return componentViewports.hasOwnProperty(key) && componentViewports[key] !== null
      ? componentViewports[key]
      : defaultComponentViewports[key];
  }
}

/**
 * usage
 * <Hidden {...viewportsToHidden(componentViewPorts))}>
 *  {component}
 * </Hidden>
 */

export function viewportsToHidden(viewports: Viewports): HiddenProps {
  if (viewports === true || viewports === 'xsUp' || viewports === 'xlDown') return null;
  if (viewports === false) return { xsUp: true };
  const breakpoint: Breakpoint = breakpointSlicer(viewports);
  const direction: ViewDirection = directionSlicer(viewports);
  const index = breakpoints.indexOf(breakpoint);
  if (direction === 'Up') {
    return { [checkIsViewport(`${breakpoints[index - 1]}Down`)]: true };
  } else {
    return { [checkIsViewport(`${breakpoints[index + 1]}Up`)]: true };
  }
}

/**
 * usage:
 * drawer: props =>
 *  permanentDrawerStyle(viewports.PermanentDrawer)(theme, drawerWidth)
 *
 */

export function contentWidthStyles(permanentDrawerViewports: Viewports, theme: Theme, drawerWidth: number, styles: any = {}) {
  if (permanentDrawerViewports === true || permanentDrawerViewports === 'xlDown' || permanentDrawerViewports === 'xsUp')
    return {
      ...styles,
      width: `calc(100% - ${drawerWidth}px)`,
    };
  if (permanentDrawerViewports === false)
    return {
      ...styles,
      width: '100%',
    };

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return {
    ...styles,
    width: '100%',
    [theme.breakpoints[direction](breakpoint)]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  };
}

export function permanentDrawerStyles(permanentDrawerViewports: Viewports, theme: Theme, drawerWidth: number, styles: any = {}) {
  // ex. "mdUp"
  if (permanentDrawerViewports === true || permanentDrawerViewports === 'xlDown' || permanentDrawerViewports === 'xsUp')
    return {
      ...styles,
      width: drawerWidth,
    };
  if (permanentDrawerViewports === false)
    return {
      ...styles,
      width: 0,
    };

  const breakpoint: Breakpoint = breakpointSlicer(permanentDrawerViewports);
  const direction = directionSlicer(permanentDrawerViewports) === 'Up' ? 'up' : 'down';

  return {
    ...styles,
    [theme.breakpoints[direction](breakpoint)]: {
      width: drawerWidth,
    },
  };
}

export function mainStyles(bottomNavViewports: Viewports, theme: Theme, styles: any = {}) {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      ...styles,
      paddingBottom: 56,
    };
  if (bottomNavViewports === false) return styles;

  const breakpoint: Breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';

  return {
    ...styles,
    [theme.breakpoints[direction](breakpoint)]: {
      paddingBottom: 56,
    },
  };
}

export function fabStyles(bottomNavViewports: Viewports, theme: Theme, styles: any = {}) {
  // ex. "xsDown"
  if (bottomNavViewports === true || bottomNavViewports === 'xlDown' || bottomNavViewports === 'xsUp')
    return {
      ...styles,
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`,
    };
  if (bottomNavViewports === false) return styles;

  const breakpoint: Breakpoint = breakpointSlicer(bottomNavViewports);
  const direction = directionSlicer(bottomNavViewports) === 'Up' ? 'up' : 'down';

  return {
    ...styles,
    [theme.breakpoints[direction](breakpoint)]: {
      paddingBottom: `calc(${theme.spacing(2)}px + 56px)`,
    },
  };
}

function breakpointSlicer(viewports: Viewport): Breakpoint {
  const breakpoint = viewports.slice(0, 2);
  return breakpoint === 'xs' || breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'lg' || breakpoint === 'xl'
    ? breakpoint
    : null;
}
function directionSlicer(viewports: Viewport): ViewDirection {
  const direction = viewports.slice(2);
  return direction === 'Up' || direction === 'Down' ? direction : null;
}

function checkIsViewport(str: string): Viewport {
  return str === 'xsDown' ||
    str === 'xsUp' ||
    str === 'smDown' ||
    str === 'smUp' ||
    str === 'mdDown' ||
    str === 'mdUp' ||
    str === 'lgUp' ||
    str === 'lgDown' ||
    str === 'xlUp' ||
    str === 'xlDown'
    ? str
    : null;
}
