
export const SET_USER = 'SET_USER';

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export function fecthUser (values) {
    return async function(dispatch) {
        const response = await fetch(
            'http://localhost:8080/user/getUserLogin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }
        )
        /*if(response.status === 403){
            history.push('/login');
        }
        else{*/
        const user = await response.json();
        dispatch(setUser(user))
        
    }
    
    
    
}

