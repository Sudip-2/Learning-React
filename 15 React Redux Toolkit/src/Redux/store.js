// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice  from './slices/Counters/counterSlice';

// Create the store with the reducer
const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store;