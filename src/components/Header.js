import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
    render() {
        return (
            <Navbar className="bg-light py-0" variant="light" id="navbar" sticky='top'>
                <NavbarBrand id="navbarbrand" href="#home"><img src={baseUrl + '/images/bunbohue.png'} width="50" height="50" />  Yummy App</NavbarBrand>
                <Nav className="mr-auto nav">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#home">Meals</NavLink>
                    <NavLink href="#home">About Us</NavLink>
                    <NavLink href="#home">Contact US</NavLink>
                </Nav>
                <Button className="btn-warning">Sign-In</Button>
            </Navbar>
        )
    }
}

export default Header;