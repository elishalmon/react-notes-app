
export const SET_NOTES = 'SET_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const RESET_NOTES = 'RESET_NOTES'

export function setNotes(notes) {
    return {
        type: SET_NOTES,
        payload: notes
    }
}
export function addNote(notes) {
    return {
        type: ADD_NOTE,
        payload: notes
    }
}
export function deleteNote(notes) {
    return {
        type: DELETE_NOTE,
        payload: notes
    }
}
export function updateNote(notes) {
    return {
        type: UPDATE_NOTE,
        payload: notes
    }
}

export function resetNotes() {
    return {
        type: RESET_NOTES,
        payload: {}
    }
}

export function fetchNotes() {
    return async function (dispatch) {
        const userId = JSON.parse(localStorage.getItem('user')).id
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        const data = await response.json();
        dispatch(setNotes(data));
    }
}

export function addNoteToServer(note) {
    return async function (dispatch) {
        const response = await fetch(
            'http://localhost:8080/notes/addNote',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            });
        const data = await response.json();
        dispatch(addNote(data))
    }
}

 export function deleteNoteFromServer(id) {
     return async function(dispatch) {
        const response = await fetch(
            `http://localhost:8080/notes/deleteNote/${id}`, 
        {
            method: 'DELETE'
        });
        if(response.status === 404){
            dispatch(deleteNote([]))
        }
        else {
            const data = await response.json();
            dispatch(deleteNote(data))
        }
        
        
     }
 }
 
export function updateNoteOnServer(note){
    return async function(dispatch) {
        const response = await fetch(
            'http://localhost:8080/notes/updateNote',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            }
        )
        const data = await response.json();
        dispatch(updateNote(data))
    }
}

