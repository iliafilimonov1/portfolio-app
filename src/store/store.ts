import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/CountSlice';

const rootReducer = combineReducers({
  countReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
