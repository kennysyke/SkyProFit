import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input1: "",
  input2: "",
  input3: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setInput1: (state, action) => {
      state.input1 = action.payload;
    },
    setInput2: (state, action) => {
      state.input2 = action.payload;
    },
    setInput3: (state, action) => {
      state.input3 = action.payload;
    },
    resetInputs: (state) => {
      state.input1 = "";
      state.input2 = "";
      state.input3 = "";
    },
  },
});

export const { setInput1, setInput2, setInput3, resetInputs } =
  modalSlice.actions;

export default modalSlice.reducer;
