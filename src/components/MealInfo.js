import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderMealInfo({item}) {
    return (
        <Card>
            <CardImg src='/src/components/images/kapoon.png' alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    )
}

class MealInfo extends Component {
    constructor(props) {
        super(props);
        this.state =  {}
    }
    
    render() {
        return (
            <RenderMealInfo meals={this.props.meals} />
        )
    }
}