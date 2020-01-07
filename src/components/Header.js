import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    render() {
        return (
            <Navbar className="py-0" variant="light" id="navbar" sticky='top'>
                <NavbarBrand id="navbarbrand" href="#home" className="ml-4"><img src={baseUrl + '/images/bunbohue.png'} width="50" height="50" />  Yummy App</NavbarBrand>
                <Nav className="mr-auto nav">
                    <NavLink href="#home">HOME</NavLink>
                    <NavLink href="#home">MEALS</NavLink>
                    <NavLink href="#home">ABOUT</NavLink>
                    <NavLink href="#home">CONTACT</NavLink>
                </Nav>
                <button className="passivebutton mr-3">WHAT SHOULD I EAT?</button>
                <button className="activebutton">SIGN UP</button>
            </Navbar>
        )
    }
}

export default Header;