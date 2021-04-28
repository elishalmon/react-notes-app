import { SET_NOTES } from '../actions/notesAction'

const initialState = {
    notes: []
}

export default function notesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_NOTES:
            return { ...state, notes: [...state.notes, action.payload] }
        default:
            return state;
    }
}