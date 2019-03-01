import { WindowLocation } from '@reach/router';

export interface AppState {
  val: number;
}
export interface LocationWithState extends WindowLocation {
  state: {
    appState: AppState;
    key: string;
  } | null;
}

export const initialAppState: AppState = {
  val: 100,
};

export const createInitialAppState = (location: LocationWithState) =>
  location.state === null || location.state.appState === undefined
    ? initialAppState
    : location.state.appState;
