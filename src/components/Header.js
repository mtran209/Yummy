import React, { Component } from 'react';
import { Navbar, Nav, NavbarBrand, Modal, ModalHeader, ModalBody, Collapse, NavbarToggler} from 'reactstrap';
import MealInfo from './MealInfo';
import { NavLink, Link } from 'react-router-dom';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isNavOpen: false,
        }

        this.randomMeal = this.randomMeal.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    randomMeal = (props) => {
        return (
            props.meals[this.getRandomInt(0, props.meals.length)]
        )
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return (
            <React.Fragment>
            <Navbar light expand="lg" className="py-0" variant="light" id="navbar" sticky='top'>
            <Link to='./home'><NavbarBrand id="navbarbrand" href="#home" className="ml-4"><i className="fa fa-cutlery" style={{ color: '#70D07B' }} />  Yummy App</NavbarBrand></Link>
            <NavbarToggler type="button" onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="mr-auto nav">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/meals">Meals</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                
                <button onClick={this.toggleModal} className="passivebutton mr-3">PICK FOR ME</button>
                <button className="activebutton">SIGN UP</button>
                </Collapse>
            </Navbar>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal} >Let's go get some...</ModalHeader>
                <ModalBody>
                    <MealInfo meal={this.randomMeal(this.props)}/>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }
}

export default Header;