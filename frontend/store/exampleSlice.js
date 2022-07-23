import { createSlice } from '@reduxjs/toolkit';

// creating a global state slice
const initialState = { state1: 'state1' };

// examples of reducers in a slice. each reducer is for each action
const exampleReducer1 = (state) => {
  state.state1 = state.state1 + 1;
  return state;
};

const exampleReducer2 = (state, action) => {
  if (action.type == 'some_type') {
    state.state1 = state.state1 + 1;
  }
  return state;
};

// create the Slice
const exampleSlice = createSlice({
  initialState: initialState,
  reducer: {
    // merge all reducers in a slice together
    exampleName1: exampleReducer1,
    exampleName2: exampleReducer2,
  },
});

// export slice reducer as default
export default exampleSlice.reducer;

// export actions
export const exampleActions = exampleSlice.actions;
