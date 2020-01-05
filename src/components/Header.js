import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <Jumbotron fluid>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Yummy</h1>
                        <h2>Tastes so good</h2>
                    </div>
                </div>
            </div>
        </Jumbotron>
        )
    }
}

export default Header;