import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import MealInfo from './MealInfo';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            difficulty: '',
            mealtime: '',
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSearch = this.handleSearch.bind(this);;
    }

    handleSearch(e) {
        this.setState({
            isModalOpen: true,
            difficulty: e.target.difficulty.value,
            mealtime: e.target.mealtime.value
        });
        this.toggleModal();
        e.preventDefault();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }


    render() {

        const searchResults = this.props.meals.filter(meal => meal.mealtime === this.state.mealtime).filter(meal => meal.difficulty === this.state.difficulty).map(meal => {
            return (
                <MealInfo meal={meal} />
            );
        })

        return (
            <div className="row" style={{ height: '100%' }}>
                <div className="col mx-auto" id="search">
                    <h1>What Are You Craving?</h1>
                    <Form onSubmit={e => this.handleSearch(e)}>
                        <FormGroup row>
                            <Col id="difform">
                                <Label for="difficulty">My cooking is
                                    <Input
                                        type="select"
                                        name="difficulty"
                                        id="difficulty"
                                    >
                                        <option>lousy</option>
                                        <option>mediocre</option>
                                        <option>world-class</option>
                                    </Input>
                                </Label>
                            </Col>
                            <Col id="typeform">
                                <Label for="mealtime">I want
                                    <Input
                                        type="select"
                                        name="mealtime"
                                        id="mealtime"
                                    >
                                        <option>breakfast</option>
                                        <option>lunch</option>
                                        <option>dinner</option>
                                    </Input>
                                </Label>
                            </Col>
                        </FormGroup>
                        <button type="submit" className="passivebutton">Find my Meal!</button>
                    </Form>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Try these meals out!
                        </ModalHeader>
                        <ModalBody>
                            {searchResults}
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Search;