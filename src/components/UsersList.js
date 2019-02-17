import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

import { getUsersRequest, deleteUserRequest } from '../actions/users';

class UsersList extends React.Component {
    onDeleteUser = id => {
        this.props.deleteUserRequest(id);
    };

    renderUser = user => {
        return (
            <ListGroupItem key={user.id}>
                <section style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1, margin: 'auto 0' }}>
                        {`${user.firstName} ${user.lastName}`}
                    </div>
                    <div>
                        <Button
                            outline
                            color="danger"
                            onClick={() => this.onDeleteUser(user.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </section>
            </ListGroupItem>
        )
    };

    componentDidMount() {
        this.props.getUsersRequest();
    }

    render() {
        const { users } = this.props;

        return (
            <ListGroup>
                {users.sort((a, b) => {
                    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) {
                        return 1;
                    }

                    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) {
                        return -1;
                    }

                    if (a.lastName.toLowerCase() > b.lastName.toLowerCase()) {
                        return 1;
                    }

                    return -1;
                }).map(user => this.renderUser(user))}
            </ListGroup>
        );
    }
}

UsersList.propTypes = {
    getUsersRequest: PropTypes.func,
    deleteUserRequest: PropTypes.func,
    users: PropTypes.array
};

const mapStateToProps = state => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps, {
    getUsersRequest: getUsersRequest,
    deleteUserRequest: deleteUserRequest
})(UsersList);
