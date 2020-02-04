import * as React from 'react';
import { Link, navigate } from 'gatsby';
import { NavigateOptions } from '@reach/router';
import classNames from 'classnames';
import { AppState } from '../types';

interface Props {
  className?: string;
  children: JSX.Element | JSX.Element[] | string;
  to: string;
  appState: AppState;
}

export function AppLink({ className, children, to, appState }: Props) {
  return (
    <Link className={classNames(className)} to={to} state={{ appState }}>
      {children}
    </Link>
  );
}

export function appNavigate(to: string, appState: AppState, options: NavigateOptions<{}> = {}) {
  navigate(to, {
    ...options,
    state: { appState },
  });
}
