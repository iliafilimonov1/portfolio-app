import { combineReducers, configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/CountSlice';
import { usersApi } from './usersApi';

const rootReducer = combineReducers({
  countReducer,
  [usersApi.reducerPath]: usersApi.reducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
