import React, { Component } from 'react';
import Home from './Home';
import { MEALS } from '../shared/meals';
import Header from './Header';
import Footer from './Footer';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meals: MEALS
        }
    }

    render() {
        return(
            <div className="container-fluid p-0">
                <Header />
                <Home meals={this.state.meals} />
                <Footer />
            </div>
        )
    }
}

export default Main;