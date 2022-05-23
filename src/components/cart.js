 


import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import React from 'react';
import axios from 'axios';

 
 export function Cart(){
 
  const [cartItems, setCart] = React.useState(null);
  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    axios.get(`http://127.0.0.1:3001/cart/${user.id}`,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      }}).then((response) => {
      setCart(response.data);
   
    });
  }, []);
  if (!cartItems) return null;

  console.log(cartItems);

  
  async function getprodinfo(productId) {
    const URI="http://127.0.0.1:3001/cart"
    let res =  axios.get(`${URI}/${productId}/`, productId)
   
 
    console.log(res);
  }


  return (<>
    <section classNameName="cart_area section_padding">
    <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
          <table className="table">
          {/* If there are no products in the basket No Items added will be displayed */}
          {cartItems.cart.length===0 && (<Card>  No items added </Card>)} 
          
           {cartItems.cart.map((carty) =>(

         
                < div key={carty}> <thead >
                        
               <tr>
                 <th scope="col">Product</th>
                 <th scope="col">Price</th>
                 <th scope="col">Quantity</th>
               
               </tr>
             </thead><tbody>
                 <tr>
                   <td>
                     <div class="media">
                       <div class="d-flex">
                         <img src="assets/img/gallery/card1.png" alt="" />
                       </div>
                       <div class="media-body">
                        
                         <p></p>
                       </div>
                     </div>
                   </td>
                   <td>
                     <h5> </h5>
                   </td>
                   <td>
                     <div class="product_count">
                   
                     <td>
                     <h5>{carty.productNumber}</h5>
                   </td>
                     </div>
                   </td>
                  
                 </tr>
                 <tr>
                 </tr>
                
                 
               </tbody>
              
               </div>
                  
               
                 
                ))}

<tr>
                   <td></td>
                   <td></td>
                   <td>
                     <h5>Subtotal</h5>
                   </td>
                   <td>
                     <h5>$2160.00</h5>
                   </td>
                 </tr>
                 <tr>
                 <td>
                 <div>
                         
                 <Button variant="primary mr-2">Proceed to Checkout</Button>
                     </div>
                   </td>
                 </tr>
                 </table>
            </div>
          </div>
          </div>
          </section>
           </>
         
           );
          };
        
 
      
         
         
        
        

























 