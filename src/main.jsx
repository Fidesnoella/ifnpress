import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import Articles from './articles';
import './index.css'
import newsReducer from './features/news'
import PageLayout from './components/layout/PageLayout';
import Authors from './authors';
import publisherReducer from './features/publisher';
import articlesReducer from './features/articles';
import searchReducer from './features/search';
import Search from './search';

const store = configureStore({
  reducer: {
    news: newsReducer,
    publisher: publisherReducer,
    articles: articlesReducer,
    search: searchReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index path="/" element={<App />} />
            <Route path="/article/:id" element={<Articles />} />
            <Route path="/publisher/:id" element={<Authors />} />
            <Route path="/search" element={< Search />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)

