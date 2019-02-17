import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

// worker saga
function* getUsers() {
    try {
        const response = yield call(api.getUsers);
        yield put(actions.getUsersSuccess(response.data));
    } catch (e) {
        yield put(actions.usersError('An error occurred while getting the users list'));
    }
}

// watcher saga
function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

// worker saga
function* createUser(action) {
    try {
        const response = yield call(api.createUser, {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName
        });
        yield put(actions.createUserSuccess(response.data));
    } catch (e) {
        yield put(actions.usersError('An error occurred while creating a user'));
    }
}

// watcher saga
function* watchCreateUserRequest() {
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

// worker saga
function* deleteUser(id) {
    try {
        yield call(api.deleteUser, id);
        yield put(actions.deleteUserSuccess(id));
    } catch (e) {
        yield put(actions.usersError('An error occurred while deleting a user'));
    }
}

// watcher saga
function* watchDeleteUserRequest() {
    while (true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);

        yield call(deleteUser, action.payload.id);
    }
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
];

export default usersSagas;
