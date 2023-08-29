import { createSlice } from '@reduxjs/toolkit';
import planet from './planet.png';

export const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [
    {
      id: 1,
      rocket_name: 'Alpha',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus est excepturi cumque soluta. Iusto quas nihil asperiores id magnam! Quae numquam doloremque quisquam architecto nam, at in debitis sapiente?',
      flickr_images: planet,
    },
    {
      id: 2,
      rocket_name: 'Beta',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus est excepturi cumque soluta. Iusto quas nihil asperiores id magnam! Quae numquam doloremque quisquam architecto nam, at in debitis sapiente?',
      flickr_images: planet,
    },
    {
      id: 3,
      rocket_name: 'Gamma',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus est excepturi cumque soluta. Iusto quas nihil asperiores id magnam! Quae numquam doloremque quisquam architecto nam, at in debitis sapiente?',
      flickr_images: planet,
    },
  ],
  reducers: {},
});

export default rocketSlice.reducer;
