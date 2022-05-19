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

export function Snack() {
   
  const [snacks, setSnacks] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/categories/snacks`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setSnacks(response.data);
   
    });
  }, []);
  if (!snacks) return null;

  console.log(snacks);
  
  return(<div>
  {snacks.map((snacky) =>(
     
 <Card  key={snacky} style={{ width: '18rem' }}>
<Card.Img variant="top" src={snacky.imagePath} />
<Card.Body>

  <Card.Title>{snacky.productName}</Card.Title>
  <Card.Text>
  Price {snacky.price}
  </Card.Text>
  <Button variant="primary mr-2">Add</Button>
  <Button variant="primary">Remove</Button>
</Card.Body>
</Card>

 ))}
 </div>
  );
};
export function Drink() {
   
  const [drinks, setDrinks] = React.useState(null);

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:3001/categories/drinks`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setDrinks(response.data);
   
    });
  }, []);
  if (!drinks) return null;

  console.log(drinks);
  
  const handleClick = () =>  {
    axios
      .post(`http://127.0.0.1:3001/cart/4`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        productId: "3",
        ProductNumber:"4",
        UserId:"4",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"


  

  return(<div>
  {drinks.map((drinky) =>(
     
 <Card  key={drinky} style={{ width: '18rem' }}>
<Card.Img variant="top" src={drinky.imagePath} />
<Card.Body>

  <Card.Title>{drinky.productName}</Card.Title>
  <Card.Text>
  Price {drinky.price}
  </Card.Text>
  <Button variant="primary mr-2" onClick={handleClick}>Add</Button>
  <Button variant="primary">Remove</Button>
</Card.Body>
</Card>

 ))}
 </div>
  );
};
  
  

  

  
  

  export function Conditional(props) {
    const Categ = props.Categ;
        switch( Categ) {
         case "meals":
           return <Meal />;
           break;
         case "drinks":
           return <Drink />;
           break;
           case "snacks":
           return <Snack />;
           break;
         default:
          return <></>;
       } 
       
       }
    
   




