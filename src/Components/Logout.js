import { Redirect } from 'react-router-dom';
//import { resetNotes } from '../redux/actions/notesAction';
import { useDispatch } from 'react-redux';
import { resetNotes } from '../redux/notesSlice';

export default function Logout() {

    const dispatch = useDispatch();
    dispatch(resetNotes());

    localStorage.clear()

    return(
        <Redirect to='/login' />
    )
}