import * as _ from 'lodash';
import { Types } from '../actions/users';

export default (state = [], action) => {
    switch (action.type) {
        case Types.GET_USERS_SUCCESS:
            return action.payload.users;
        case Types.CREATE_USER_SUCCESS:
            return [...state, action.payload.user];
        case Types.DELETE_USER_SUCCESS: {
            const newState = [...state];
            return _.remove(newState, function(item) {
                return item.id !== action.payload.id;
            });
        }
        default:
            return state;
    }
};
