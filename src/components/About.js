import React, { Component } from 'react';
import { Modal, ModalBody } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import Mealinfo from './MealInfo';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            selectedMeal: 0,
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleModal() {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    };

    handleClick(e) {
        this.setState({
            selectedMeal: e.target.attributes.getNamedItem('mealId').value
        });
        this.toggleModal();

    };

    render() {

        const showMeals = this.props.meals.map(meal => (
            <img mealId={meal.id} onClick={this.handleClick} className="p-1" src={baseUrl + meal.image} style={{ width: 110, height: 110 }} />
        ));

        const selectedMeal = this.props.meals.filter(meal => meal.id == this.state.selectedMeal)[0];

        return (
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-9 mx-auto p-5">
                        <h1 className="mb-5">What's For Dinner?</h1>
                        <p> Tired of not knowing what to do for dinner? Do you ever come home from a long day of work only to be prompted with an endless set of dinner options? Do you ever crave a breakfast or lunch but don't know what to eat because you don't know what saute means? That's where Yummy App comes in. All you have to do is let us know your skill level in the kitchen and what you are craving. That's it! No more guesswork and no more crippling indecision! If you're still stuck - let us pick for you with our randomized meal selector button! Never have to think about what's for dinner again!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md mx-auto">
                        {showMeals}
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
                    <ModalBody>
                        <Mealinfo meal={selectedMeal} />
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default About;