import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import Article from './articles';
import './index.css'
import newsReducer from './features/news'
import PageLayout from './components/layout/PageLayout';


const store = configureStore({
  reducer: {
    news: newsReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route index path="/" element={<App />} />
            <Route path="/article/:id" element={<Article />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  </StrictMode>,
)

