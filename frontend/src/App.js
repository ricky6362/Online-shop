import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import About from './pages/About'
import CartPage from './pages/CartPage'
import Products from './pages/Products';
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login';
import SignUp from './pages/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />      </Routes>
    </>
  );
}

export default App;
