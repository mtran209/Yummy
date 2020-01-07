import React, {Component } from 'react';
import { Form, Input, Label } from 'reactstrap';

class Search extends Component {
    render() {
        return (
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-5 mx-auto" id="search">
                        <Label>What Are You Craving?</Label>
                        <Form>
                            <Input name="search" className="text" placeholder="Which flavor are you trying tonight?"></Input>
                        </Form>
                    </div>
                </div>
        )
    }
}

export default Search;