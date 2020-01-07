import React from 'react';
import Search from './Search';

function Banner(props) {
    return (
        <div>
            <div className="container-fluid" id="banner">
                <Search />
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

export default Banner;