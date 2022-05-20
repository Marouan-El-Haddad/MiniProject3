import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import logo from './\\img\\mainpic.jpg'
export function Hero (){

return (
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-500"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Spice Explosion</h3>
      <p>Can you handle it?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     
      src= {logo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Spring snacks</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Summer Temptations</h3>
      <p>Surender to your desiers</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
);
}