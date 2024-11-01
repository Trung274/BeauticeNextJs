import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TESTIMONIALS } from '@/app/data';

interface TestimonialState {
  testimonials: typeof TESTIMONIALS;
  currentIndex: number;
  isAutoPlaying: boolean;
}

const initialState: TestimonialState = {
  testimonials: TESTIMONIALS,
  currentIndex: 0,
  isAutoPlaying: true,
};

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState,
  reducers: {
    setCurrentIndex: (state, action: PayloadAction<number>) => {
      state.currentIndex = action.payload;
    },
    nextTestimonial: (state) => {
      state.currentIndex = 
        state.currentIndex === state.testimonials.length - 1 
          ? 0 
          : state.currentIndex + 1;
    },
    previousTestimonial: (state) => {
      state.currentIndex = 
        state.currentIndex === 0 
          ? state.testimonials.length - 1 
          : state.currentIndex - 1;
    },
    setAutoPlaying: (state, action: PayloadAction<boolean>) => {
      state.isAutoPlaying = action.payload;
    },
  },
});

export const { 
  setCurrentIndex, 
  nextTestimonial, 
  previousTestimonial,
  setAutoPlaying 
} = testimonialSlice.actions;
export default testimonialSlice.reducer;