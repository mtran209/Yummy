import React, { Component } from 'react';
import MealInfo from './MealInfo';


class Home extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        const featuredMeals = this.props.meals.filter(meal => meal.featured).map(meal => {
            return (
                <div className="col-sm" key={meal.id}>
                    <MealInfo meal={meal} />
                </div>
            )
        });
        
        return (
            <div className="container-fluid">
                <div className="row">
                {featuredMeals}
                </div>
            </div>
        )
    }
}

export default Home;