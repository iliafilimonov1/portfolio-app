import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICounter {
  count: number;
}

const initialState: ICounter = {
  count: 0,
};

export const countSlice = createSlice({
  name: 'testCounter',
  initialState,
  reducers: {
    inc(state: ICounter, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default countSlice.reducer;
