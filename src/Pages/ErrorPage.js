import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { resetNotes } from '../redux/notesSlice'; 


export default function ErrorPage() {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(resetNotes());
        history.push("/")
    }

    return(
        <div style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography 
                variant='h1'
                style = {{marginTop: '125px'}}
            >
                <Box
                    fontWeight={100}
                    fontSize={40}
                    fontStyle="normal"
                    letterSpacing={2}
                >
                    Something went wrong...
                </Box>
                 
            </Typography>
            <Button 
                size='large'
                color="primary"
                variant="contained" 
                onClick={handleClick}
                style = {{marginTop: '50px'}}
            >
                Back to home page
            </Button> 
            </div>
    )
}