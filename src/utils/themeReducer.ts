export const initialThemeState = (prefersDarkMode: boolean): ThemeState => ({
  darkMode: prefersDarkMode,
});

export interface ThemeState {
  darkMode: boolean;
}

export type ThemeAction = { type: 'TOGGLE_DARKMODE' };

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case 'TOGGLE_DARKMODE':
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      throw new Error(`Unrecognized type ${action.type}`);
  }
};
