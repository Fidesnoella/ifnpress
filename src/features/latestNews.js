import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLatestNews = createAsyncThunk(
  "news/fetchLatestNews",
  async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=apple&from=2023-04-17&to=2023-04-17&sortBy=popularity&pageSize=10&apiKey=fe978d9344274d2a82f3eefdb6838695"
    );
    return response.data.articles;
  }
);

const latestNewsSlice = createSlice({
  name: "latestNews",
  initialState: {
    latestNews: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLatestNews.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchLatestNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.latestNews = action.payload;
      })
      .addCase(fetchLatestNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectlatestNews = (state) => state.latestNews.latestNews;
export const selectlatestNewsStatus = (state) => state.latestNews.status;
export const selectlatestNewsError = (state) => state.latestNews.error;

export default latestNewsSlice.reducer;
