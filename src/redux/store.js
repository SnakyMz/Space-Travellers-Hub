import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
=======
import rocketsReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
>>>>>>> dev
  },
});

export default store;
