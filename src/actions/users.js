export const Types = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
    CREATE_USER_REQUEST: 'CREATE_USER_REQUEST',
    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    DELETE_USER_REQUEST: 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    USERS_ERROR: 'USERS_ERROR'
};

export const getUsersRequest = () => {
    return {
        type: Types.GET_USERS_REQUEST
    };
};

export const getUsersSuccess = usersList => {
    return {
        type: Types.GET_USERS_SUCCESS,
        payload: {
            usersList: usersList
        }
    };
};

export const createUserRequest = (firstName, lastName) => {
    return {
        type: Types.CREATE_USER_REQUEST,
        payload: {
            firstName: firstName,
            lastName: lastName
        }
    };
};

export const createUserSuccess = user => {
    return {
        type: Types.CREATE_USER_SUCCESS,
        payload: {
            user: user
        }
    };
};

export const deleteUserRequest = id => {
    return {
        type: Types.DELETE_USER_REQUEST,
        payload: {
            id: id
        }
    };
};

export const deleteUserSuccess = id => {
    return {
        type: Types.DELETE_USER_SUCCESS,
        payload: {
            id: id
        }
    };
};

export const usersError = error => {
    return {
        type: Types.USERS_ERROR,
        payload: {
            error: error
        }
    };
};
