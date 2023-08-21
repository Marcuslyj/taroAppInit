import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "outbound",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = globalSlice.actions;

export default globalSlice.reducer;
