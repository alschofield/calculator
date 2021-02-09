import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    placeholder: 0
  },
  reducers: {
    clear:(state) => {
      state.value = 0
      state.placeholder = 0
    },
    add: (state) => {
      state.value = (state.value + state.placeholder)
      state.placeholder = 0
    },
    subtract: (state) => {
      state.value = (state.value - state.placeholder)
      state.placeholder = 0
    },
    multiply: (state) => {
      state.value = (state.value * state.placeholder)
      state.placeholder = 0
    },
    divide: (state) => {
      state.value = (state.value / state.placeholder)
      state.placeholder = 0
    },
    updatePlaceholder: (state, action) => {
      state.placeholder = parseInt(state.placeholder + action.payload)
    }
  },
});

export default calculatorSlice.reducer;
