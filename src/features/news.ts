import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Article, NewsState } from "../types";


const KEY = import.meta.env.VITE_KEY;

export const fetchNews = createAsyncThunk<Article[], string>(
  "news/fetchNews",
  async (category = "general") => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/top-headlines?country=us&language=en&category=${category}&apiKey=${KEY}`
    );
    return response.data.articles;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [] as Article[],
    category: "general",
    selectedArticle: null as Article | null,
    status: "idle",
    error: null,
  } as NewsState,
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
        if(action.error.message)
        state.error = action.error.message;
      });
  },
});


export const selectNews = (state: { news: NewsState }) => state.news.news;
export const selectNewsStatus = (state: { news: NewsState }) => state.news.status;
export const selectNewsError = (state: { news: NewsState }) => state.news.error;
export const selectedArticle = (state: { news: NewsState }) => state.news.selectedArticle;
export const selectedCategory= (state: { news: NewsState }) => state.news.category;

export default newsSlice.reducer;
export const { changeCategory, setSelectedArticle } = newsSlice.actions;
