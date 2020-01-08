import React, { Component } from 'react';
import { Navbar, Nav, NavLink, NavbarBrand, Modal, ModalHeader, ModalBody} from 'reactstrap';
import MealInfo from './MealInfo';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }

        this.randomMeal = this.randomMeal.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
        this.getRandomInt = this.getRandomInt.bind(this);
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
            <Navbar className="py-0" variant="light" id="navbar" sticky='top'>
                <NavbarBrand id="navbarbrand" href="#home" className="ml-4"><i className="fa fa-cutlery" style={{ color: '#70D07B' }} />  Yummy App</NavbarBrand>
                <Nav className="mr-auto nav">
                    <NavLink href="#home">HOME</NavLink>
                    <NavLink href="#home">MEALS</NavLink>
                    <NavLink href="#home">ABOUT</NavLink>
                    <NavLink href="#home">CONTACT</NavLink>
                </Nav>
                <button onClick={this.toggleModal} className="passivebutton mr-3">PICK FOR ME</button>
                <button className="activebutton">SIGN UP</button>
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