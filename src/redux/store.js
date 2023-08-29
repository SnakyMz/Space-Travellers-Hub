import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionReducer,
  },
});

export default store;
