import { configureStore } from '@reduxjs/toolkit';

// pages
import homeReducer from '../features/pages/home/homeSlice';

// main components
import footerReducer from '../features/main-components/footer/footerSlice';
import navReducer from '../features/main-components/nav/navSlice';

// components
import calculatorReducer from '../features/app-components/Calculator/Calculator.slice';


export default configureStore({
  reducer: {
    // page
    home: homeReducer,

    // main components
    footer: footerReducer,
    nav: navReducer,

    // components
    calculator: calculatorReducer
  },
});
