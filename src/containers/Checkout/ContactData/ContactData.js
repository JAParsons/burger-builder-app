import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        //should really calculate price on the server to prevent manipulation
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer:{
                name: 'John',
                address:{
                    street: 'some street',
                    zipCode: '1234',
                    country: 'UK'
                },
                email: 'yo@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => 
                this.setState({loading: false})
            );
    }

    render(){
        let form = (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Your name'/>
                <input className={classes.Input} type='email' name='email' placeholder='Your email'/>
                <input className={classes.Input} type='text' name='street' placeholder='Street'/>
                <input className={classes.Input} type='text' name='postCode' placeholder='Post Code'/>
                <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if(this.state.loading){
            form = <Spinner/>
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;