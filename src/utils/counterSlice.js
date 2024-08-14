import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    currentCount: 0,
  },
  reducers: {
    increaseCount: (state, action) => {
      state.currentCount = state.currentCount + 1;
    },
  },
});

export const { increaseCount } = counterSlice.actions;

export default counterSlice.reducer;
