import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Mainer} from './components/mainer';

import {Login} from './components/login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Productlist } from "./components/productlist";
import { Menu } from './components/menu';
import { Cart } from './components/cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Menu />}>
    <Route path="/login" element={<Login />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/productlist" element={<Productlist items={["meal","snack","drink"]} />}/>    
    </Route> 

    </Routes>  
   

    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
