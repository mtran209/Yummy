import React from 'react';
import { Card, CardHeader, CardText, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function MealInfo(props) {
    return (
        <Card>
            <CardImg src={baseUrl + props.meal.image} alt={props.meal.name} />
            <CardHeader>{props.meal.name}</CardHeader>
            <CardText>{props.meal.description}</CardText>
        </Card>
    )
};

export default MealInfo;
