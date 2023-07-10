import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Publisher, PublisherState } from "../types";

const KEY = import.meta.env.VITE_KEY;

export const fetchPublishers = createAsyncThunk<Publisher[], string>(
  "publishers/fetchPublishers",
  async (category = "general") => {
    const response = await axios.get(
      `https://news-proxy.netlify.app/api/top-headlines/sources?language=en&category=${
        category || "general"
      }&apiKey=${KEY}`
    );
    return response.data.sources;
  }
);

const publisherSlice = createSlice({
  name: "publisher",
  initialState: {
    publisher: [] as Publisher[],
    selectedAuthor: null,
    status: "idle",
    error: null,
  } as unknown as PublisherState,
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
        if(action.error.message)
        state.error = action.error.message;
      });
  },
});

export const selectPublisher = (state: {publisher: PublisherState}) => state.publisher.publisher;
export const selectPublisherStatus = (state: {publisher: PublisherState}) => state.publisher.status;
export const selectPublisherError = (state: {publisher: PublisherState}) => state.publisher.error;
export const selectedAuthor = (state: {publisher: PublisherState}) => state.publisher.selectedAuthor;

export default publisherSlice.reducer;
export const { setSelectedAuthor } = publisherSlice.actions;
