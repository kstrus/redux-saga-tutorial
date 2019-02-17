import React, { Component } from 'react';
import UsersList from './UsersList';
import CreateUserForm from './CreateUserForm';

class App extends Component {
    render() {
        return (
            <div style={{ margin: '20px auto', maxWidth: '600px' }}>
                <CreateUserForm />
                <UsersList />
            </div>
        );
    }
}

export default App;
