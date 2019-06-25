import { AppState, Layer } from '../types/';

export type Action = { type: 'SET_LAYER'; layer: Layer } | { type: 'TOGGLE_BORDER' };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_LAYER':
      return {
        ...state,
        mapState: {
          ...state.mapState,
          layer: action.layer
        }
      };
    case 'TOGGLE_BORDER':
      return {
        ...state,
        mapState: {
          ...state.mapState,
          borderVisibility: !state.mapState.borderVisibility
        }
      };
    default:
      throw new Error();
  }
}
