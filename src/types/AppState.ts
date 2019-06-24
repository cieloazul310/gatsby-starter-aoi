import { WindowLocation } from '@reach/router';
import { Layer } from './Layers';

export interface MapState {
  layer: Layer;
  borderVisibility: boolean;
}

export interface AppState {
  val: number;
  mapState: MapState;
}
export interface LocationWithState extends WindowLocation {
  state: {
    appState: AppState;
    key: string;
  } | null;
}

export const initialMapState: MapState = {
  layer: 'cjstd',
  borderVisibility: true
};

export const initialAppState: AppState = {
  val: 100,
  mapState: initialMapState
};

export const createInitialAppState = (location: LocationWithState) =>
  !location.state || !location.state.appState ? initialAppState : location.state.appState;
