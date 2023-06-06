import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Article, NewsState } from "../types";

const KEY = import.meta.env.VITE_KEY;

export const searchArticles = createAsyncThunk<Article[], string>(
  "search/searchArticles",
  async (searchQuery) => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/everything?q=${searchQuery}&language=en&apiKey=${KEY}`
    );
    return response.data.articles;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    news: [] as Article[],
    status: "idle",
    error: null,
  } as NewsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.news = action.payload;
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = "failed";
        if(action.error.message)
        state.error = action.error.message;
      });
  },
});

export const selectSearchArticles = (state: {news: NewsState, search:{news:Article[], error:string, status:string}}) => state.search.news;
export const selectSearchArticlesStatus = (state: {news: NewsState, search:{news:Article[], error:string, status:string}}) => state.search.status;
export const selectSearchArticlesError = (state: {news: NewsState, search:{news:Article[], error:string, status:string}}) => state.search.error;

export default searchSlice.reducer;
