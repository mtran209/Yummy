import React, { Component } from 'react';
import Home from './Home';
import { MEALS } from '../shared/meals';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meals: MEALS
        }
    }

    render() {
        return(
            <div className="container">
                <Home meals={this.state.meals} />
            </div>
        )
    }
}

export default Main;