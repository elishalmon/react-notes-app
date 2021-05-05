import { SET_NOTES, DELETE_NOTE, UPDATE_NOTE, ADD_NOTE, RESET_NOTES } from '../actions/notesAction'
import {keyBy} from 'lodash';

const initialState = {
    notes: {},
}

export default function notesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_NOTES:
            return { ...state, notes: keyBy(action.payload, (singleNote) => singleNote.id)}
        case ADD_NOTE:
            return { ...state, notes: keyBy(action.payload, (singleNote) => singleNote.id)}
        case DELETE_NOTE:
            return { ...state, notes: keyBy(action.payload, (singleNote) => singleNote.id)}
        case UPDATE_NOTE: 
            return { ...state, notes: keyBy(action.payload, (singleNote) => singleNote.id)}
        case RESET_NOTES:
            return { ...state, notes: action.payload }
        default:
            return state;
    }
}