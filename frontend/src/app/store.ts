import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './blogSlice';
import testimonialReducer from './testimonialSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    testimonial: testimonialReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;