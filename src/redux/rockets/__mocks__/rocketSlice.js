import { createSlice } from '@reduxjs/toolkit';

const planet = require('../../../images/planet.png');

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [
      {
        id: 1,
        image: planet,
        name: 'Alpha',
        description: 'Rocket launched in space.',
        reserved: false,
      },
      {
        id: 2,
        image: planet,
        name: 'Beta',
        description: 'Rocket launched in space.',
        reserved: true,
      },
    ],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    reserveRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    },
    cancelRocket: (state, action) => {
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;

export default rocketSlice.reducer;
