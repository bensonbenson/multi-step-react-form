import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Proceeds to the next step 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields changing
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        // Pull fields out of state
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        // Allows us to pass values into each component
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails 
                        // Access next step, handle change, and pass in values
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3:
                return (
                    <Confirm 
                        // We don't need to handle change here
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        values = {values}
                    />
                )
            case 4:
                return (
                    <Success />
                )
        }
    }
}

export default UserForm
