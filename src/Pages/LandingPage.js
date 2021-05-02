import { Redirect } from 'react-router-dom';

export default function LandingPage() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    return(
        isLoggedIn ? 
            <Redirect to = "/notes" /> 
                :
            <Redirect to = "/login" />
    )
}