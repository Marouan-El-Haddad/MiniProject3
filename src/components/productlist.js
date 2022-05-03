
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
export function Productlist(props)
{
  const [prod, setPost] = React.useState(null);
  
  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/prod`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!prod) return null;

  const items = props.items;;
  const listItems = items.map((item) =>
  <Card  key={item} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
  
    <Card.Title>{prod.productName}</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary">Add</Button>
    <Button variant="primary">Remove</Button>
  </Card.Body>
</Card>

    
  );
  return (
    <ul>{listItems}</ul>
  );
}



    