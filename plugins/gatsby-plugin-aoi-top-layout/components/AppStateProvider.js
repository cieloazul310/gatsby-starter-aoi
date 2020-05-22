import React from 'react';
import AppStateContext from '../../../src/utils/AppStateContext';
import reducer, { initialAppState } from '../../../src/utils/AppState';

export default function AppStateProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialAppState);
  return <AppStateContext.Provider value={{ state, dispatch }}>{children}</AppStateContext.Provider>;
}
