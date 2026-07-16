import './App.css'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/orders/:id" element={<OrderDetail/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
