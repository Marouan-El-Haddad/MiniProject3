import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React from 'react'
 


  
 
 export function Meal() {
   
    const [meals, setMeals] = React.useState(null);

    React.useEffect(() => {
      axios.get(`http://127.0.0.1:3001/categories/meals`,{
        headers: {
          'Access-Control-Allow-Origin': '*',
        }}).then((response) => {
        setMeals(response.data);
     
      });
    }, []);
    if (!meals) return null;
  
    console.log(meals);
    
    return(<div>
    {meals.map((mealy) =>(
       
   <Card  key={mealy} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mealy.imagePath} />
  <Card.Body>
  
    <Card.Title>{mealy.productName}</Card.Title>
    <Card.Text>
    Price {mealy.price}
    </Card.Text>
    <Button variant="primary mr-2">Add</Button>
    <Button variant="primary">Remove</Button>
  </Card.Body>
</Card>

   ))}
   </div>
    );
};

  
  

  export function Drinku() {
    return (
      <div>
        <h1>Hello, drinku!</h1>
        
      </div>
    );
  
  }
  

  
  export function snack() {
   return (
      <div>
        <h1>Hello, snack!</h1>
        
      </div>
    );
  
  }

  export function Conditional(props) {
    const Categ = props.Categ;
        switch( Categ) {
         case "meals":
           return <Meal />;
           break;
         case "drinks":
           return <Meal />;
           break;
         default:
          return <Drinku />;
       } 
       
       }
    
   




