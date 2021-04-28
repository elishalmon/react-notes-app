import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './redux/reducers/index';
import notesReducer from './redux/reducers/notesReducer';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(ReduxThunk)
    )
)

export default store;

/*
const store = configureStore ({
    reducer: {
        notes: notesReducer
    }
})
*/