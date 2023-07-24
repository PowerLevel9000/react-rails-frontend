import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'http://localhost:5000';
export const getGreet = createAsyncThunk('greets/greetslice/getgreet', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
});

const initialState = {
  greet: '',
  isLoading: false,
};

const greetslice = createSlice({
  name: 'greet',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGreet.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getGreet.fulfilled, (state, { payload }) => ({
      ...state,
      greet: payload,
      isLoading: false,
    }));
    builder.addCase(getGreet.rejected, (state) => ({
      ...state,
      isLoading: false,
    }));
  },
});
export default greetslice.reducer;
