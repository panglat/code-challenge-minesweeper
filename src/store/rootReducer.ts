import { combineReducers } from 'redux';
import { GameReducer } from 'business/Game/reducer';

const rootReducer = combineReducers({
  minesweeper: GameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
