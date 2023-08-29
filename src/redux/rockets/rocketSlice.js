import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  try {
    const responce = await axios.get('https://api.spacexdata.com/v4/rockets');
    return responce.data;
  } catch (error) {
    return error;
  }
});

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = action.error;
      });
  },
});

export default rocketSlice.reducer;
