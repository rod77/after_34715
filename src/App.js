import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart'; 

import './App.css'
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <>
    <CartProvider>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />                
                <Route path="/cart" element={<Cart />} /> 
                <Route path="/checkout" element={<Checkout/>} /> 
            </Routes>
        </BrowserRouter>
        </CartProvider>
    </>
  );
}

export default App;
