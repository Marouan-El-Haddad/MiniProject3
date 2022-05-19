import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Outlet, Link} from "react-router-dom";
import "./css/bootstrap.min.css"
import "./css/owl.carousel.min.css"
import "./css/flaticon.css"
import "./css/bootstrap.min.css"
import "./css/slick.css"
import "./css/nice-select.css"
import "./css/fontawesome-all.min.css"
import "./css/style.css"
import "./css/slicknav.css"

export function Menu() {
    
    var user = JSON.parse(localStorage.getItem('user'));
    var localFirstName = (user === null) ? "" : user.firstName;


    return <>

        <header>

            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper">

                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>

                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/">Home</Link></li>
                                        <li><a href="shop.html">shop</a></li>
                                        <li><a href="about.html">about</a></li>
                                        <li className="hot"><a href="#">Latest</a>
                                            <ul className="submenu">
                                                <li><Link to="/productlist">Productlist</Link></li>
                                                <li><Link to="/main">Main</Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="blog.html">Blog</a>
                                            <ul className="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-details.html">Blog Details</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Pages</a>
                                            <ul className="submenu">
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="cart.html">Cart</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                                <li><a href="confirmation.html">Confirmation</a></li>
                                                <li><a href="checkout.html">Product Checkout</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-right">
                                <ul>
                                    <li>{localFirstName}</li>
                                    <li><Link to="/login"><span className="flaticon-user"></span></Link></li>
                                    <li><Link to="/cart"><span className="flaticon-shopping-cart"></span></Link></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <Outlet/>
    </>
}
