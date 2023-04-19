import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import trendingNewsReducer from './features/trendingNews'
import publishersReducer from './features/publishers'
import latestNewsReducer from './features/latestNews'
import topNewsReducer from './features/topNews'


const store = configureStore({
  reducer: {
    trendingNews: trendingNewsReducer,
    authors: publishersReducer,
    latestNews: latestNewsReducer,
    topNews: topNewsReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
