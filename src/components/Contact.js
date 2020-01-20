import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            text: '',

        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e) {
        alert(JSON.stringify(this.state));
        e.preventDefault();
    }

    render() {
        return (
            <div className='container-fluid contact p-5'>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <h1>Contact Us</h1>
                            <FormGroup row>
                                <Label for="name">Name</Label>
                                <Input
                                    name='name'
                                    type='text'
                                    id='name'
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for='email'>Email:</Label>
                                <Input
                                    type='email'
                                    name="email"
                                    placeholder='Email'
                                    id='email'
                                />
                            </FormGroup>
                            <FormGroup row>
                                <Label for='text'>Comments:</Label>
                                <Input
                                    type='textarea'
                                    name='text'
                                    placeholder="Let us know what you think!"
                                    id='text'
                                />
                            </FormGroup>
                            <Button style={{fontFamily: 'Bangers'}} className="btn-warning btn-lg" type="submit">Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;