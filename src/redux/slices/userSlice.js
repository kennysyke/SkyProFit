import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: () => initialState,
    setUser: (state, { payload }) => ({
      ...state,
      email: payload.email,
      token: payload.token,
      id: payload.id,
    }),
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer

export const selectEmail = (state) => state.user.email
export const selectToken = (state) => state.user.token
