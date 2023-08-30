import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [
    {
      mission_id: 1,
      mission_name: 'Alpha',
      description: 'Mission to go to space',
      reserved: false,
    },
    {
      mission_id: 2,
      mission_name: 'Beta',
      description: 'Mission to go back to earth',
      reserved: true,
    },
  ],
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
});

export const { reserve, cancel } = missionSlice.actions;
export default missionSlice.reducer;
