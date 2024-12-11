import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import analyticsReducer from './slices/analyticsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    analytics: analyticsReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;