import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg styleNav'  >
            <div className='container-fluid'>
                <Link className='navbar-brand' to={"/"}  >
                    <img src={logo} alt="logo"  width={121} height={80} />
                    <span className="title_prin">STORE: ADIDAS - Test</span> 
                </Link>
                <div className='nav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink className='nav-link styleLink' to={"/category/zapatillas"}  >Zapatillas</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link styleLink' to={"/category/remeras"}  >Remeras</NavLink>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;