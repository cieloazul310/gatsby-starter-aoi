import * as React from 'react';
import { Link, navigate } from 'gatsby';
import MuiLink from '@material-ui/core/Link';
import { NavigateOptions } from '@reach/router';
import classNames from 'classnames';
import { AppState } from '../types/AppState';
import { useAppState } from '../utils/AppStateContext';

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  to: string;
}

export function AppLink({ className, children, to }: Props) {
  const appState = useAppState();
  return (
    <MuiLink component={Link} className={classNames(className)} to={to} state={{ appState }} color="secondary">
      {children}
    </MuiLink>
  );
}

export function appNavigate(to: string, options: NavigateOptions<AppState> = {}) {
  navigate(to, options);
}
