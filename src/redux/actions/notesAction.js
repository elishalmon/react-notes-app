
export const SET_NOTES = 'SET_NOTES'

export function setNotes(notes) {
    return {
        type: SET_NOTES,
        payload: notes
    }
}

export default function fetchNotes() {
    return async function (dispatch) {
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${208}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await response.json();
        dispatch(setNotes(data));
    }
}