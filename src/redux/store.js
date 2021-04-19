import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from '../features/pages/home/homeSlice';

// components
import calculatorReducer from '../features/app-components/Calculator/Calculator.slice';


export default configureStore({
  reducer: {
    // page
    home: homeReducer,

    // components
    calculator: calculatorReducer
  },
});
