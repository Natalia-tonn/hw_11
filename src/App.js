
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import SearchArticle from './pages/SearchArticle';
import Navbar from './components/Navbar';
import backgroundImage from "./images/ocean.jpg"

function App() {
  return( 
  <div>
 

    <Navbar />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/article'element={<Article/>}  />
  <Route path='/article/:articleId/:articletitle' element={<SearchArticle />} />

</Routes>
</div>
  );
}

export default App;
