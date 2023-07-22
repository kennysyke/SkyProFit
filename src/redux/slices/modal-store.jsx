import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input1: '',
  input2: '',
  input3: '',
  input4: '',
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setInput1: (state, action) => {
      state.input1 = action.payload
    },
    setInput2: (state, action) => {
      state.input2 = action.payload
    },
    setInput3: (state, action) => {
      state.input3 = action.payload
    },
    setInput4: (state, action) => {
      state.input4 = action.payload
    },
    setInput5: (state, action) => {
      state.input5 = action.payload
    },
    resetInputs: (state) => {
      state.input1 = ''
      state.input2 = ''
      state.input3 = ''
      state.input4 = ''
      state.input5 = ''
    },
  },
})

export const { setInput1, setInput2, setInput3, setInput4, setInput5, resetInputs } = modalSlice.actions

export default modalSlice.reducer;
