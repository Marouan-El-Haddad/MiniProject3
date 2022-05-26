import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import  { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


 
 export function NewProducts() {
   
  








    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
      axios.get(`http://127.0.0.1:3001/products`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }}).then((response) => {
        setProducts(response.data);
     
      });
    }, []);
    if (!products) return null;
  
    console.log(products);
    

    async function removeproduct(productId) {
      let user = JSON.parse(localStorage.getItem('user'));
      const URI=`http://127.0.0.1:3001/cart/${user.id}/products`;
      try{
        let res = await axios.delete(`${URI}/${productId}`)
        console.log(res);
      }catch(err){
        console.log(err);
      }
     
    }




     async function addproduct(productId,productNumber=1) {
      let user = JSON.parse(localStorage.getItem('user'));
    
      const adder = {
        "productId":productId,
        "productNumber":productNumber
      
    }
    let response = await axios.post(`http://127.0.0.1:3001/cart/${user.id}`
    , adder);
    console.log(response);
  }

    const templist=[]
   for ( let el of products.allProducts){
   if (el.tag ==="new"){
       templist.push(el)
   }
   }


    return(<div class="row  row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"  >
    {templist.map((mealy) =>(
    
   <Card  key={mealy.productId}  style={{ width: '20rem',margin: '1rem' }}>
 < Link to={{pathname: `/product?${mealy.productId}`}}>  <Card.Img variant="top" src={mealy.imagePath} /> </Link>
  <Card.Body>
  
    <Card.Title >{mealy.productName}</Card.Title>
    <Card.Text>
    Price {mealy.price}
    </Card.Text>
    <Button variant="primary mr-2"onClick={()=>addproduct(mealy.productId)}>Add</Button>
    <Button variant="primary" onClick={()=>removeproduct(mealy.productId)}>Remove</Button>
  </Card.Body>
</Card>

   ))}
   </div>
    );
};