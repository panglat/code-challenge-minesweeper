import { RootState } from 'store/rootReducer';

export const gameOptionsSelector = (state: RootState) =>
  state.minesweeper.game?.options;
export const boardSelector = (state: RootState) =>
  state.minesweeper.game?.board;
export const gameStatus = (state: RootState) => state.minesweeper.game?.status;
