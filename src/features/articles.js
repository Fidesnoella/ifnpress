import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchArticles = createAsyncThunk(
  "publishers/fetchArticles",
  async (publisher) => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/everything?sources=${publisher}&language=en&apiKey=ef14e265a5cd463a82565cd22d04c1ed`
    );
    return response.data.articles;
  }
);

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectArticles = (state) => state.articles.articles;
export const selectArticlesStatus = (state) => state.articles.status;
export const selectArticlesError = (state) => state.articles.error;

export default articlesSlice.reducer;
