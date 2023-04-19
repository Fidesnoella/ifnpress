import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopNews = createAsyncThunk("news/fetchTopNews", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=4&apiKey=fe978d9344274d2a82f3eefdb6838695"
  );
  return response.data.articles;
});

const topNewsSlice = createSlice({
  name: "topNews",
  initialState: {
    newsData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTopNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newsData = action.payload;
      })
      .addCase(fetchTopNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectNewsData = (state) => state.topNews.newsData;
export const selectNewsStatus = (state) => state.topNews.status;
export const selectNewsError = (state) => state.topNews.error;

export default topNewsSlice.reducer;
