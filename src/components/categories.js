import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
 
 export function Categories(){
    const [cat, setPost] = React.useState(null);

    React.useEffect(() => {
      axios.get(`http://127.0.0.1:3001/all`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }}).then((response) => {
        setPost(response.data);
     
      });
    }, []);
    if (!cat) return null;
  
    console.log(cat);
  
  
    return (
        <div class="popular-items section-padding row">
            <div class="container">
            
                
                    <div class="col-xl-7 col-lg-5 col-md-10">
                        <div class="section-tittle mb-70 text-center">
                            <h2>Categories</h2>
                            <p>What does your heart desire?</p>
                        </div>
                    
                    </div>
                    </div>
                    
     {cat.uniqueItems.map((item) =>(


    
<div  key={item} class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
<div class="single-popular-items mb-50 text-center">
    <div class="popular-img">
        
        <div class="img-cap">
            <span>Add to cart</span>
        </div>
        <div class="favorit-items">
            <span class="flaticon-heart"></span>
        </div>
    </div>
    <div class="popular-caption">
    <h3>{item}</h3>
      
        
    </div>
</div>
</div>
        
        
        
  
    
     ))}
  </div>
  
  
  
    
      );

}