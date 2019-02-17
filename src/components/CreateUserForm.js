import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

import { createUserRequest } from '../actions/users';

class CreateUserForm extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.createUserRequest(this.state.firstName, this.state.lastName);

        this.setState({
            firstName: '',
            lastName: ''
        });
    };

    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value });

    };

    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value });

    };

    render() {
        return (
            <Form style={{ marginBottom: '40px' }} onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>First name</Label>
                    <Input
                        required
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Last name</Label>
                    <Input
                        required
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Button block color="success" type="submit">Create</Button>
                </FormGroup>
            </Form>
        );
    }
}

CreateUserForm.propTypes = {
    createUserRequest: PropTypes.func
};

export default connect(null, {
    createUserRequest
})(CreateUserForm);
