import React, { Component } from 'react';
import Home from './Home';
import { MEALS } from '../shared/meals';
import Header from './Header';
import Footer from './Footer';
import Meals from './Meals';
import Contact from './Contact';
import About from './About';
import { Switch, withRouter, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            meals: MEALS
        }
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <Header meals={this.state.meals} />
                <Switch>
                    <Route exact path='/meals' render={() => <Meals meals={this.state.meals} />} />
                    <Route exact path='/home' render={() => <Home meals={this.state.meals} />} />
                    <Route exact path='/contact' render={() => <Contact />} />
                    <Route exact path='/about' render={() => <About meals={this.state.meals} />} />
                    <Redirect to='./home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Main);