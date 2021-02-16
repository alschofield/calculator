import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
    placeholder: 0,
    operator: ''
  },
  reducers: {
    clear:(state) => {
      state.value = 0
      state.placeholder = 0
    },
    add: (state) => {
      state.operator = '+'
    },
    subtract: (state) => {
      state.operator = '-'
    },
    multiply: (state) => {
      state.operator = '*'
    },
    divide: (state) => {
      state.operator = '/'
    },
    evaluate: (state) => {
      switch(state.operator) {
        case '+':
          state.value = (state.value + state.placeholder)
          state.placeholder = 0
          break
        case '-':
          state.value = (state.value - state.placeholder)
          state.placeholder = 0
          break
        case '*':
          state.value = (state.value * state.placeholder)
          state.placeholder = 0
          break
        case '/':
          state.value = (state.value / state.placeholder)
          state.placeholder = 0
          break
        case '':
          state.value = state.placeholder
          state.placeholder = 0
          break
        default:
          break
      }
    },
    updatePlaceholder: (state, action) => {
      state.placeholder = parseInt(state.placeholder + action.payload)
    }
  },
});

export default calculatorSlice.reducer;
