import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="header">
                <div className={`navbar ${show ? "show" : "hide"}`}>
                    <div className="logo">
                        Eat-<span>Up</span>
                    </div>
                        <ul className="navItems">
                            <li><NavLink to="/" activeClassName="active" className="navItem">Home</NavLink> </li>
                            <li><NavLink to="/Menu" activeClassName="active" className="navItem">Menu</NavLink> </li>
                            <li><NavLink to="/About" activeClassName="active" className="navItem">About</NavLink> </li>
                            <li><NavLink to="/Cart" activeClassName="active" className="navItem">Cart</NavLink> </li>
                        </ul>
                    <div className="navIcons">
                        <i className="fas fa-bars openNav-btn" onClick={()=> setShow((ps)=> !ps)}></i>
                        <i className="fas fa-times closeNav-btn" onClick={()=> setShow((ps)=> !ps)}></i>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Navbar;