import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { logout } from './modules/authManager';
import "./Header.css"

export default function Header({ isLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand className='Title'>Ryans World</NavbarBrand>

                <Nav className="mr-auto" navbar>
                    { /* When isLoggedIn === true, we will render the Home link */}
                    {isLoggedIn &&
                        <>
                            <ul className='nav_items'>
                                <li className='nav_item'>
                                    <NavLink className='nav_item' tag={RRNavLink} to="/">Home</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink className='nav_item' tag={RRNavLink} to="/book">Books</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink className='nav_item' tag={RRNavLink} to="/tag">Tags</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink className='nav_item' tag={RRNavLink} to="/category">Categories</NavLink>
                                </li>
                                <li className='nav_item'>
                                    <NavLink className='nav_item' tag={RRNavLink} to="/comment">Comments</NavLink>
                                </li>
                                <li className='nav_item_logout'>
                                    <a aria-current="page" className="nav-link"
                                        style={{ cursor: "pointer" }} onClick={logout}>Logout</a>
                                </li>
                            </ul>
                        </>
                    }
                </Nav>
                <Nav navbar>

                    {!isLoggedIn &&
                        <>
                            <li className='nav_item'>
                                <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                            </li>
                            <li className='nav_item'>
                                <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                            </li>
                        </>
                    }
                </Nav>

            </Navbar>
        </div>
    );
}
