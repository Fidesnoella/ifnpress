import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=fe978d9344274d2a82f3eefdb6838695"
  );
  return response.data.articles;
});

const trendingNewsSlice = createSlice({
  name: "trendingNews",
  initialState: {
    newsData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsData = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectNewsData = (state) => state.trendingNews.newsData;
export const selectNewsStatus = (state) => state.trendingNews.status;
export const selectNewsError = (state) => state.trendingNews.error;

export default trendingNewsSlice.reducer;
