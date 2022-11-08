import './bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import '../css/app.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Product from './pages/Product';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import DetailProduct from './pages/DetailProduct';
import Catelogy from './pages/Catelogy';

ReactDOM.createRoot(document.getElementById('app')).render(
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path='/search' element={<Product />}></Route>   
                <Route path='/addProduct' element={<AddProduct />}></Route>
                <Route path='/editProduct/:id' element={<EditProduct />}></Route>
                <Route path='/detail/:id' element={<DetailProduct />}></Route>
                <Route path='/catelogy' element={<Catelogy />}></Route>
                
            </Routes> 
        </BrowserRouter> 
    </>


);