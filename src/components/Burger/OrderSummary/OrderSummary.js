import React from 'react';

import Wrapper from '../../../hoc/Wrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredirentSummary = Object.keys(props.ingredients)
        .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        );
    });

    return(
        <Wrapper>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredirents:</p>
            <ul>
                {ingredirentSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
        </Wrapper>
    );
};

export default orderSummary;