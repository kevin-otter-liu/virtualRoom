import { configureStore } from '@reduxjs/toolkit';

import exampleReducer from './exampleSlice';

// creates a store from all slice reducers
const store = configureStore({
  reducer: {
    exampleReducer1: exampleReducer,
  },
});
