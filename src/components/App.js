import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

import UsersList from './UsersList';
import CreateUserForm from './CreateUserForm';
import { usersError } from '../actions/users';

class App extends React.Component {
    onAlertDismiss = () => {
        this.props.usersError('');
    };

    render() {
        return (
            <div style={{
                margin: '20px auto',
                padding: '0 10px',
                maxWidth: '600px'
            }}>
                <Alert color="danger" isOpen={!!this.props.error} toggle={this.onAlertDismiss}>
                    {this.props.error}
                </Alert>
                <CreateUserForm />
                <UsersList />
            </div>
        );
    }
}

App.propTypes = {
    error: PropTypes.string
};

const mapStateToProps = state => {
    return {
        error: state.users.error
    };
};

export default connect(mapStateToProps, {
    usersError: usersError
})(App);
