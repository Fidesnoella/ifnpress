import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from "./components/News";
import PageLayout from './components/layout/PageLayout';
import Articles from './articles';
import Authors from './authors';
import Search from './search';

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
      </Routes>
    </Router>
  )

}

