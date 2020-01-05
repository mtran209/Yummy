import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function RenderFeaturedMeals({ meal }) {
    if (meal.featured) {
        return (
            <Card>
                <CardImg src={baseUrl + meal.image} alt={meal.name} />
                <CardBody>
                    <CardTitle>{meal.name}</CardTitle>
                    <CardText>{meal.description}</CardText>
                </CardBody>
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
                <div key={meal.id}>
                    <RenderFeaturedMeals meal={meal} />
                </div>
            )
        });
        
        return (
            <div>
                {featuredMeals}
            </div>
        )
    }
}

export default Home;