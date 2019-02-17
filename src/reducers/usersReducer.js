import * as _ from 'lodash';
import { Types } from '../actions/users';

const INITIAL_STATE = {
    usersList: [],
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS:
            return { ...state, usersList: action.payload.usersList };
        case Types.CREATE_USER_SUCCESS:
            return { ...state, usersList: [...state.usersList, action.payload.user] };
        case Types.DELETE_USER_SUCCESS: {
            const newList = _.remove([...state.usersList], function(item) {
                return item.id !== action.payload.id;
            });
            return { ...state, usersList: newList }
        }
        case Types.USERS_ERROR:
            return { ...state, error: action.payload.error }
        default:
            return state;
    }
};
