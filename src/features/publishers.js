import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAuthors = createAsyncThunk("news/fetchAuthors", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2//top-headlines/sources?apiKey=fe978d9344274d2a82f3eefdb6838695"
  );
  return response.data.sources;
});

const publishersSlice = createSlice({
  name: "authors",
  initialState: {
    authors: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.authors = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAuthors = (state) => state.authors.authors;
export const selectAuthorsStatus = (state) => state.authors.status;
export const selectAuthorsError = (state) => state.authors.error;

export default publishersSlice.reducer;
