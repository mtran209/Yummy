import React, { Component } from 'react';
import MealInfo from './MealInfo';


class Meals extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const featuredMeals = this.props.meals.filter(meal => meal.featured).map(meal => {
            return (
                <div className="col-xl-3" key={meal.id}>
                    <MealInfo meal={meal} />
                </div>
            )
        });

        return (
            <div>
                <div className="container-fluid" id="bannerrow">
                    <div className="row">
                        <div className="col-sm">
                            <h1 className="py-5">Find Your Next Meal Idea <i className="fa fa-lightbulb" /></h1>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {featuredMeals}
                    </div>
                </div>
            </div>
        )
    }
}

export default Meals;