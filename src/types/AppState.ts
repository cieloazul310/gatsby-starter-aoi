import { WindowLocation } from '@reach/router';

export interface AppState {
}
export interface LocationWithState extends WindowLocation {
  state: {
    appState: AppState;
    key: string;
  } | null;
}

export const initialAppState: AppState = {
};

export const createInitialAppState = (location: LocationWithState) =>
  !location.state || !location.state.appState ? initialAppState : location.state.appState;
