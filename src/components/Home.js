import React, { Component } from 'react';
import Search from './Search';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid" id="banner">
                <Search meals={this.props.meals} />
            </div>
        );
    }
}

export default Home;