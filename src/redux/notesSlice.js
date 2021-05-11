import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';


export const getNotesAsync = createAsyncThunk(
    'notes/getNotes',
    async () => {
        const userId = JSON.parse(localStorage.getItem('user')).id
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(response.ok) {
                const notes = await response.json();
                return notes;
            }
    }
);

export const addNoteAsync = createAsyncThunk(
    'notes/addNote',
    async (note) => {
        const response = await fetch(
            'http://localhost:8080/notes/addNote',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            });
            if(response.ok) {
                const newNote = await response.json()
                return newNote;
            }
    }
);

export const updateNoteAsync = createAsyncThunk(
    'notes/updateNote',
    async (note) => {
        const response = await fetch(
            'http://localhost:8080/notes/updateNote',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            }
        )
        if(response.ok) {
            const updatedNote = await response.json();
            return updatedNote;
        }
    }
);

export const deleteNoteAsync = createAsyncThunk(
    'notes/deleteNote',
    async (id) => {
        const response = await fetch(
            `http://localhost:8080/notes/deleteNote/${id}`, 
        {
            method: 'DELETE'
        });
        if(response.ok) {
            return id;
        }
    }
);

const notesAdapter = createEntityAdapter({
    selectId: (note) => note.id,
    sortComparer: (a, b) => b.id - a.id,
});

const initialState = notesAdapter.getInitialState({
    status: 'beforeLoad'
});

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        resetNotes: state => initialState,
    },
    extraReducers: {
        [getNotesAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            notesAdapter.setAll(state, action.payload);
        },
        [getNotesAsync.pending] : state => {
            state.status = 'loading';
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            notesAdapter.addOne(state, action.payload)
        },
        [addNoteAsync.pending] : state => {
            state.status = 'loading';
        },
        [updateNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            const {id, ...changes } = action.payload;
            notesAdapter.updateOne(state, { id, changes });
        },
        [updateNoteAsync.pending] : state => {
            state.status = 'loading';
        },
        [deleteNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            notesAdapter.removeOne(state, action.payload)
        },
        [deleteNoteAsync.pending] : state => {
            state.status = 'loading';
        },
    },
});

export const { resetNotes } = notesSlice.actions;

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
} = notesAdapter.getSelectors(state => state.notes)

export default notesSlice.reducer;