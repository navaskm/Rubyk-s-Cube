import { configureStore } from '@reduxjs/toolkit';
import rubykSlice from '@/app/lib/store/feature/teature'

export const makeStore = () => {
  return configureStore({
    reducer: {
      ruby:rubykSlice,
    },
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']