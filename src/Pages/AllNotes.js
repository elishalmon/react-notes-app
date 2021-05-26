import { useSelector, useDispatch } from 'react-redux';
import {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import notesStyle from '../Styles/notesStyle';
import Box from '@material-ui/core/Box';
import StarsRating from '../Components/StarsRating';
import { getNotesAsync, updateNoteAsync, deleteNoteAsync, selectAllNotes } from '../redux/notesSlice';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function AllNotes() {

    const notesList = useSelector(selectAllNotes);
    const notesStatus = useSelector(state => state.notes.status);
    
    const dispatch = useDispatch();
    const classes = notesStyle();
    const history = useHistory();

    useEffect(() => {
        if(notesStatus === 'beforeLoad') {
            const userId = JSON.parse(localStorage.getItem('user')).id
            dispatch(getNotesAsync(userId));
        }
    }, [dispatch, notesStatus]);

    if(notesStatus === 'failed') {
        return <Redirect to='error' />
    }

    const handleDelete = (note) => {
        dispatch(deleteNoteAsync(note.id));
    }

    const handleClick = (note) => {
        if(note.read === false) {
            note = { ...note, read: true }
            handleUpdateReadFlag(note);
        }
        history.push(`/notes/view/${note.id}`)
    }

    const handleUpdateReadFlag = (note) => {
        dispatch(updateNoteAsync(note));
    }

    return(
        <div className={classes.main}>
        {
            notesStatus === 'loading' ?  
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
            :
            notesList.length !== 0 ?
            notesList.map( (item) => {
            return(
                <Paper 
                    className={classes.item} 
                    elevation={9} 
                    style={{borderColor: item.color}}
                >
                    <Button
                        className={classes.button} 
                        fullWidth 
                        onClick={ () => handleClick(item) }
                        classes = {{label: classes.label}}
                    >
                        <div className={classes.top}>
                            <Typography>
                                <Box
                                    fontWeight={ item.read ? 300 : 1000 }
                                    fontSize={24}
                                    letterSpacing={1}
                                >
                                    {item.title}
                                </Box>
                            </Typography>
                            <StarsRating 
                                readOnly={true} 
                                startValue={item.priority} 
                                size={''}
                            />
                        </div>
                    </Button>
                    <div className={classes.buttom}>
                        <div className={classes.icon}>
                            <i class={item.icon}></i>
                        </div>
                        <IconButton 
                            className={classes.delete}  
                            aria-label="delete" 
                            onClick = { () => handleDelete(item) }
                        >
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </Paper>
                )
            })
            :
            <div>
            <Typography 
                variant='h1'
                style = {{marginTop: '125px'}}
            >
                <Box
                    fontWeight={ 100 }
                    fontSize={40}
                    fontStyle="normal"
                    letterSpacing={2}
                >
                    You don't have notes yet...
                </Box>
                 
            </Typography>
            <Button 
                size='large'
                fullWidth
                color="primary"
                variant="contained" 
                onClick={()=> history.push("/notes/add-note")}
                style = {{marginTop: '50px'}}
            >
                Add your first note
            </Button> 
            </div>
        }
        </div>
    )
}
    
    
