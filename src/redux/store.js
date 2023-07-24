import { configureStore } from '@reduxjs/toolkit';
import greetReducer from './greets/greetSlice';

const store = configureStore({
  reducer: {
    greet: greetReducer,
  },
});

export default store;
