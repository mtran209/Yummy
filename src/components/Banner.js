import React, { Component } from 'react';
import Search from './Search';

class Banner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container-fluid" id="banner">
                    <Search meals={this.props.meals} />
                </div>
                <div className="container-fluid" id="bannerrow">
                    <div className="row">
                        <div className="col">
                            <h1 className="py-5">Find Your Next Meal Idea <i className="fa fa-lightbulb" /></h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;