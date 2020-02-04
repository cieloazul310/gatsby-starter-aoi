import * as React from 'react';

export const DispatchContext = React.createContext(() => {
  throw new Error('Forgot to wrap component in `ThemeProvider`');
});

if (process.env.NODE_ENV !== 'production') {
  DispatchContext.displayName = 'ThemeDispatchContext';
}

export interface ThemeState {
  darkMode: boolean;
}

interface Action {
  type: 'TOGGLE_DARKMODE';
}

export const themeReducer = (state: ThemeState, action: Action) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      throw new Error(`Unrecognized type ${action.type}`);
  }
}
