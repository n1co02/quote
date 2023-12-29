import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice' // Import authReducer

// Reducers
// Import slices here

export const store = configureStore({
  reducer: {
    auth: authReducer, // Add the slice here
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
