import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news";
import publisherReducer from "../features/publisher";
import articlesReducer from "../features/articles";
import searchReducer from "../features/search";
import toggleMode from "../features/toggleMode";

const store = configureStore({
  reducer: {
    news: newsReducer,
    publisher: publisherReducer,
    articles: articlesReducer,
    search: searchReducer,
    mode: toggleMode 
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
