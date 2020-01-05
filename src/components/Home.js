import React, { Component } from 'react';
import { Card, CardImg, CardText, CardHeader } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderFeaturedMeals({ meal }) {
    if (meal.featured) {
        return (
            <Card>
                <CardHeader>{meal.name}</CardHeader>
                <CardImg width='100%' src={baseUrl + meal.image} alt={meal.name} />
                    <CardText>{meal.description}</CardText>
            </Card>
        )
    };

    return <div />;
}

class Home extends Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        
        const featuredMeals = this.props.meals.filter(meal => meal.featured).map(meal => {
            return (
                <div className="col-sm" key={meal.id}>
                    <RenderFeaturedMeals meal={meal} />
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