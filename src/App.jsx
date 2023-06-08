import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/products' element={<Products />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
