import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const API_KEY = process.env.REACT_APP_KEY;

export const fetchNews = createAsyncThunk(
  "news/fetchLatestNews",
  async (category = "general") => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/top-headlines?country=us&category=${category}&apiKey=fe978d9344274d2a82f3eefdb6838695`
    );
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    status: "idle",
    error: null,
    category: "general",
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectNews = (state) => state.news.news;
export const selectNewsStatus = (state) => state.news.status;
export const selectNewsError = (state) => state.news.error;

export default newsSlice.reducer;
export const { changeCategory } = newsSlice.actions;
