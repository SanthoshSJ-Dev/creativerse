import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/products' element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
