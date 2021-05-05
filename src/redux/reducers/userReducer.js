import {SET_USER} from '../actions/userAction';

const initialState = {
    user: {
        id: -1,
        email: '',
        name: ''
    },
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USER:
            return { ...state, user: action.payload }
        default:
            return state;
    }
}