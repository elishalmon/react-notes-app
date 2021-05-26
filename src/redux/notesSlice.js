import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const getToken = () => {
    return JSON.parse(localStorage.getItem('user')).token;
}

export const getNotesAsync = createAsyncThunk(
    'notes/getNotes',
    async (userId, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}`
                },
        });
        const data = await response.json();
        if(response.ok) {
            return data;
        }
        return rejectWithValue(data.message);
    }
);

export const addNoteAsync = createAsyncThunk(
    'notes/addNote',
    async (note, {rejectWithValue}) => {
        const response = await fetch(
            'http://localhost:8080/notes/addNote',
            {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}` 
                },
                body: JSON.stringify(note),
            });
            const data = await response.json()
            if(response.ok) {
                return data;
            }
            return rejectWithValue(data.message ? data.message : data);
    }
);

export const updateNoteAsync = createAsyncThunk(
    'notes/updateNote',
    async (note, {rejectWithValue}) => {
        const response = await fetch(
            'http://localhost:8080/notes/updateNote',
            {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getToken()}` 
                },
                body: JSON.stringify(note),
            }
        )
        const data = await response.json();
        if(response.ok) {
            return data;
        }
        return rejectWithValue(data.message ? data.message : data);
    }
);

export const deleteNoteAsync = createAsyncThunk(
    'notes/deleteNote',
    async (id, {rejectWithValue}) => {
        const response = await fetch(
            `http://localhost:8080/notes/deleteNote/${id}`, 
        {
            method: 'DELETE',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}` 
            },
        });
        if(response.ok) {
            return id;
        }
        const data = await response.json();
        return rejectWithValue(data.message);
    }
);

const notesAdapter = createEntityAdapter({
    selectId: (note) => note.id,
    sortComparer: (a, b) => b.id - a.id,
});

const initialState = notesAdapter.getInitialState({
    status: 'beforeLoad',
    error: ''
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
        [getNotesAsync.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        [addNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            notesAdapter.addOne(state, action.payload)
        },
        [addNoteAsync.pending] : state => {
            state.status = 'loading';
        },
        [addNoteAsync.rejected] : (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        [updateNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            const {id, ...changes } = action.payload;
            notesAdapter.updateOne(state, { id, changes });
        },
        [updateNoteAsync.pending] : state => {
            state.status = 'loading';
        },
        [updateNoteAsync.rejected] : (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        [deleteNoteAsync.fulfilled]: (state, action) => {
            state.status = 'success';
            notesAdapter.removeOne(state, action.payload)
        },
        [deleteNoteAsync.pending] : state => {
            state.status = 'loading';
        },
        [deleteNoteAsync.rejected]: (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { resetNotes } = notesSlice.actions;

export const {
    selectAll: selectAllNotes,
    selectById: selectNoteById,
} = notesAdapter.getSelectors(state => state.notes)

export default notesSlice.reducer;