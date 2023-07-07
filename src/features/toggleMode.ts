import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     mode: 'light',
// };
interface modeState {
  mode : string;
}

const modeSlice = createSlice({
  name: 'mode',
  initialState:{
    mode: 'ligt'
  } as modeState,
  reducers: {
    toggleMode(state) {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const changeMode = (state: {mode: modeState}) => state.mode.mode ;
export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
