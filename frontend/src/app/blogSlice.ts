import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BLOG_ARTICLES } from '@/app/data';

const ITEMS_PER_PAGE = 3;

interface BlogState {
  articles: typeof BLOG_ARTICLES;
  currentPage: number;
  totalPages: number;
}

const initialState: BlogState = {
  articles: BLOG_ARTICLES,
  currentPage: 1,
  totalPages: Math.ceil(BLOG_ARTICLES.length / ITEMS_PER_PAGE),
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = blogSlice.actions;
export default blogSlice.reducer;