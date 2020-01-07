import React from 'react';
import { Card, CardHeader, CardText, CardImg } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';

function MealInfo(props) {
    return (
        <Card>
            <CardImg width='100%' src={baseUrl + props.meal.image} alt={props.meal.name} />
            <CardText>{props.meal.description}</CardText>
        </Card>
    )
};

export default MealInfo;
