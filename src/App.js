
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import SearchArticle from './pages/SearchArticle';

function App() {
  return (
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/article'element={<Article/>}  />
  <Route path='/article/:articleId' element={<SearchArticle />} />

</Routes>
  );
}

export default App;
