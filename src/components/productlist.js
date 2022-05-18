
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
export function Productlist()
{

  const [prod, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/products`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setPost(response.data);
   
    });
  }, []);
  if (!prod) return null;

  console.log(prod);


  return (
<div>

   {prod.allProducts.map((item) =>(
   
  <Card  key={item} style={{ width: '18rem' }}>
 
  <Card.Img variant="top" src={item.imagePath} />
  <Card.Body>
  
    <Card.Title>{item.productName}</Card.Title>
    <Card.Text>
    Price {item.price}
    </Card.Text>
  
    <Button variant="primary mr-2">Add</Button>
    <Button variant="primary">Remove</Button>
  </Card.Body>
</Card>

   ))}
</div>



  
    );
  };
  





    