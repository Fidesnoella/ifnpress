import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const KEY = import.meta.env.VITE_KEY;

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (category = "general") => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/top-headlines?country=us&language=en&category=${category}&apiKey=${KEY}`
    );
    await new Promise((resolve) => setTimeout(resolve));
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    category: "general",
    selectedArticle: {},
  },
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
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
export const selectedArticle = (state) => state.news.selectedArticle;

export default newsSlice.reducer;
export const { changeCategory, setSelectedArticle } = newsSlice.actions;
