import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchArticles = createAsyncThunk(
  "search/searchArticles",
  async (searchQuery) => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/everything?q=${searchQuery}&language=en&apiKey=ef14e265a5cd463a82565cd22d04c1ed`
    );
    return response.data.articles;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    articles: [],
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectSearchArticles = (state) => state.search.articles;
export const selectSearchArticlesStatus = (state) => state.search.status;
export const selectSearchArticlesError = (state) => state.search.error;

export default searchSlice.reducer;
