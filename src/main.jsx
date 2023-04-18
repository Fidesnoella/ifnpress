import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import newsReducer from './features/trandingNews'
import publishersReducer from './features/publishers'


const store = configureStore({
  reducer: {
    news: newsReducer,
    authors: publishersReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
