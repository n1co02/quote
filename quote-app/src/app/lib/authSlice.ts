import { createSlice, PayloadAction } from '@reduxjs/toolkit'
export type SerializableUser = {
  uid: string
  email: string | null
  displayName: string | null
}

type AuthState = {
  user: SerializableUser | null
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
    setUser: (state, action: PayloadAction<SerializableUser>) => {
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
