import { configureStore } from '@reduxjs/toolkit';
import radarFit from './reducers';

export default configureStore({
  reducer: {
    radarFit,
  },
});
