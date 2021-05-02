import {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import notesStyle from '../Styles/notesStyle';
import Box from '@material-ui/core/Box';
import StarsRating from '../Components/StarsRating';

export default function Notes() {

    const [ notesList, setNotesList ] = useState([])
    const classes = notesStyle()
    const userId = JSON.parse(localStorage.getItem('user')).id
    const history = useHistory()

    const loadNotes = async () => {
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${userId}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await response.json();
        setNotesList(data)
    }

    const handleUpdateReadFlag = async (note) => {
        await fetch(
            'http://localhost:8080/notes/updateNote',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(note),
            }
        )
    }

    const handleClick = (note) => {
        if(note.read === false) {
            note = { ...note, read: true }
            handleUpdateReadFlag(note)
        }
        localStorage.setItem('note', JSON.stringify(note))
        history.push(`/notes/view/${note.id}`)
    }
    
    const handleDelete = async (item) => {
        await fetch(`http://localhost:8080/notes/deleteNote/${item.id}`, 
        {
            method: 'DELETE'
        });
        loadNotes()
    }

    useEffect(
        loadNotes,
        []
    )

    return(
            <div className={classes.main}>
            {
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
                            onClick={ () => handleClick(item) }>
                            <div className={classes.top}>
                                <Typography >
                                    <Box
                                        fontWeight={ item.read ? 100 : 1000 }
                                        fontSize={20}
                                        fontStyle="normal"
                                        fontFamily="sans-serif"
                                        letterSpacing={3}
                                    >
                                        {item.title}
                                    </Box>
                                </Typography>
                                <StarsRating 
                                    className={classes.stars}
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
                <Typography variant='h1'>
                     You have to add notes!
                </Typography>    
            }
            </div>
    )
}
               