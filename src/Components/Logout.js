import { Redirect } from 'react-router-dom';

export default function Logout() {
    localStorage.clear()
    return(
        <Redirect to='/login' />
    )
}