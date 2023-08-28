import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: {
      reducer(state, action) {
        state = action.payload.value;
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    resetUser: {
      reducer(state) {
        state = {};
        return state;
      },
    },
  },
});

export const { setUser, resetUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
