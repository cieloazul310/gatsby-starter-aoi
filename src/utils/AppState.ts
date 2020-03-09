export interface AppState {
  count: number;
  tab: 0 | 1 | 2 | 3 | 4;
}

export const initialAppState: AppState = {
  count: 0,
  tab: 0,
};
