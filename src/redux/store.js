import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notesSlice'; 
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    notes: notesReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});

export default store;

/*
export default configureStore({
    reducer: {
        notes: notesReducer,
    },
});
*/