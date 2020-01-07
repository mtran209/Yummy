import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand} from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className="py-0" variant="light" id="navbar" sticky='top'>
                <NavbarBrand id="navbarbrand" href="#home" className="ml-4"><i className="fa fa-cutlery" style={{ color: '#70D07B' }} />  Yummy App</NavbarBrand>
                <Nav className="mr-auto nav">
                    <NavLink href="#home">HOME</NavLink>
                    <NavLink href="#home">MEALS</NavLink>
                    <NavLink href="#home">ABOUT</NavLink>
                    <NavLink href="#home">CONTACT</NavLink>
                </Nav>
                <button className="passivebutton mr-3">PICK FOR ME</button>
                <button className="activebutton">SIGN UP</button>
            </Navbar>
        )
    }
}

export default Header;