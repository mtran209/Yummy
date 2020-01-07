import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Col } from 'reactstrap';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    render() {
        return (
            <div className="row" style={{ height: '100%' }}>
                <div className="col mx-auto" id="search">
                    <h1>What Are You Craving?</h1>
                    <Form>
                        <FormGroup row>
                            <Col id="difform">
                                <Label for="difficulty">My cooking<Input
                                    type="select"
                                    name="difficulty"
                                    id="difficulty"
                                >
                                    <option>lousy</option>
                                    <option>mediocre</option>
                                    <option>world-class</option>
                                </Input></Label>

                            </Col>
                            <Col id="typeform">
                                <Label for="type">I want<Input
                                    type="select"
                                    name="type"
                                    id="type"
                                >
                                    <option>breakfast</option>
                                    <option>lunch</option>
                                    <option>dinner</option>
                                </Input></Label>

                            </Col>
                        </FormGroup>
                        <button className="passivebutton">Find my Meal!</button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Search;