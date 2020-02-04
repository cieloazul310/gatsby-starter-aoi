import { AppState } from '../types/';

type TypographyActions = { type: 'TOGGLE_DARKMODE' } | { type: 'SET_FONTSIZE'; fontSize: 'small' | 'middle' | 'large';};

export type Action = { type: 'any' } | TypographyActions;

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    case 'any':
      return { ...state };
    default:
      throw new Error();
  }
}
