import { AppState } from '../types/';

export type Action = { type: 'any' };

export default function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'any':
      return { ...state };
    default:
      throw new Error();
  }
}
