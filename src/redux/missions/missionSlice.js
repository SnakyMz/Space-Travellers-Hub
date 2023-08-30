import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMission = createAsyncThunk('missions/getMission', async () => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    return res.data;
  } catch (error) {
    throw Error('Error fetching missions');
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  isError: null,
};

const missionSlice = createSlice({
  name: 'Mission',
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
    cancel: (state, action) => {
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMission.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(getMission.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(getMission.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const { reserve, cancel } = missionSlice.actions;
export default missionSlice.reducer;
