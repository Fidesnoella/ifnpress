import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Article, NewsState } from "../types";

const KEY = import.meta.env.VITE_KEY;

export const fetchArticles = createAsyncThunk<Article[], string>(
  "publishers/fetchArticles",
  async (publisher) => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/everything?sources=${publisher}&language=en&apiKey=${KEY}`
    );
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    news: [] as Article[],
    status: "idle",
    error: null,
  } as NewsState,
  reducers: {
    setArticles: (state, action) => {
      state.news = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        // if(action.error.message)
        // state.error = action.error.message;
        if (action.error.message) state.error = action.error.message as unknown as string;
      });
  },
});

// export const selectArticles = (state: {news: NewsState }) => state.news.news;
// export const selectArticlesStatus = (state: {news: NewsState}) => state.news.status;
// export const selectArticlesError = (state: {news: NewsState}) => state.news.error;
export const selectArticles = (state: { articles: NewsState }) => state.articles.news;
export const selectArticlesStatus = (state: { articles: NewsState }) => state.articles.status;
export const selectArticlesError = (state: { articles: NewsState }) => state.articles.error;

export const { setArticles: setArticle } = articlesSlice.actions;

export default articlesSlice.reducer;
