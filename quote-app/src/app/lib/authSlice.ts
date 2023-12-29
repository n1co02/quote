import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: any // Replace 'any' with a more specific type for your user
  error: string | null
}

const initialState: AuthState = {
  user: null,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

// Export actions
export const { setUser, setError } = authSlice.actions

// Export reducer
export default authSlice.reducer
