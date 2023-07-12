import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModeState } from "../types";

const initialState: ModeState = {
  mode: localStorage.getItem("mode") || "light",
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    setMode(state, action: PayloadAction<'light' | 'dark'>) {
      state.mode = action.payload;
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const selectMode = (state: {mode: ModeState}) => state.mode.mode ;
export const { setMode } = modeSlice.actions;
export default modeSlice.reducer;
