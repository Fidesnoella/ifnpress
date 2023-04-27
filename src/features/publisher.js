import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPublishers = createAsyncThunk(
  "publishers/fetchPublishers",
  async (category = "general") => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines/sources?language=en&category=${
        category || "general"
      }&apiKey=bf04b72aefae4aca878fec26dace4cb4`
    );
    return response.data.sources;
  }
);

const publisherSlice = createSlice({
  name: "publisher",
  initialState: {
    publisher: [],
    selectedAuthor: {},
  },
  reducers: {
    setSelectedAuthor: (state, action) => {
      state.selectedAuthor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublishers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchPublishers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.publisher = action.payload;
      })
      .addCase(fetchPublishers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectPublisher = (state) => state.publisher.publisher;
export const selectPublisherStatus = (state) => state.publisher.status;
export const selectPublisherError = (state) => state.publisher.error;
export const selectedAuthor = (state) => state.publisher.selectedAuthor;

export default publisherSlice.reducer;
export const { setSelectedAuthor } = publisherSlice.actions;
