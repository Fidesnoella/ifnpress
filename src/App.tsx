import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from "./components/News";
import PageLayout from './components/layout/PageLayout';
import Articles from './pages/articles';
import Authors from './pages/authors';
import Search from './pages/search';
import Error from './pages/Error';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index path="/" element={<News />} />
          <Route path="/article/:id" element={<Articles />} />
          <Route path="/publisher/:id" element={<Authors />} />
          <Route path="/search/:id" element={< Search />} />
        </Route>
        <Route path='/error' element={<Error />}/>
      </Routes>
    </Router>
  )

}

