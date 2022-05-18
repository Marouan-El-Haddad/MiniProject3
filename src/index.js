import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import {Categories} from './components/categories';
import {Conditional} from './components/meal';
import {Login} from './components/login';
import {Footer} from './components/footer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Productlist } from "./components/productlist";
import { Menu } from './components/menu';
import { Cart } from './components/cart';
import { Hero } from './components/hero';
 import {useLocation} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    
   
    <>
    
    
    <BrowserRouter>
    <Routes>
    <Route path="/"   element={  <><Menu /><Categories /></>}>
   
  
    <Route path="/login" element={<Login />}/>
    <Route path="/cart" element={<Cart />}/>
    <Route path="/productlist" element={<Productlist  />}/>
    <Route path="/drinks" element={<Login />}/>
 <Route path="/meals" element={<Conditional Categ="meals"/>}/>
 <Route path="/snacks" element={<Login />}/>

    </Route> 

    
    </Routes>  

    </BrowserRouter>
    <Hero /> 
    <Categories />
    <Footer />
    </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
