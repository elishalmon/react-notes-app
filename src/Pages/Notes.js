import {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import Typography from '@material-ui/core/Typography';
import notesStyle from '../Styles/notesStyle';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Title from '../Components/Title';
import Box from '@material-ui/core/Box';
import MaterialUiIconPicker from 'react-material-ui-icon-picker';

export default function Notes() {

    const [ notesList, setNotesList ] = useState([])

    const classes = notesStyle()

    const history = useHistory()

    const loadNotes = async () => {
        const response = await fetch(
            `http://localhost:8080/user/getNotes?id=${41}`,
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

    const handleClick = (item) => {
        history.push({
            pathname: `notes/${item.id}`,
            state: { note: item }
        })
    }
    

    const handleDelete = async (item) => {
        await fetch(`http://localhost:8080/notes/deleteNote/${item.id}`, 
        {
            method: 'DELETE'
        });
        loadNotes()
    }

    const handleAdd = () => {
        history.push({
            pathname: '/add-note',
            state: {
                note: {
                    title: '',
                    body: '',
                    color: 'white',
                    user: {
                        email: 'string',
                        id: 41,
                        name: 'string',
                        notes: [
                        null
                        ],
                        password: 'string'
                    } 
              }}
        })
    }

    useEffect(
        loadNotes,
        []
    )

    const showPickedIcon = (icon) => {
        console.log(icon)
    }

    return(
        <div className={classes.main}>
            {/*<Tooltip title="Add" aria-label="add">
                <Fab color="primary" className="" onClick={ handleAdd }>
                    <AddIcon />
                </Fab>
            </Tooltip>*/}
            {
            notesList.map( (item) => {
                return(
                    <Paper className={classes.item} elevation={9} style={{borderColor: item.color}}>
                            <Button className={classes.button} fullWidth onClick={ () => handleClick(item) }>
                                <Typography >
                                    <Box
                                        fontWeight={1000}
                                        fontSize={20}
                                        fontStyle="normal"
                                        fontFamily="Monospace"
                                        letterSpacing={3}
                                    >
                                        {item.title}
                                    </Box>
                                </Typography>
                            </Button>
                            <IconButton className={classes.delete}  aria-label="delete" onClick = { () => handleDelete(item) }>
                                <DeleteIcon />
                            </IconButton>
                            
                        </Paper>
                )
            })
        }
            {/*<MaterialUiIconPicker onPick={(icon) => showPickedIcon(icon)} />*/}
        </div>
    )
}
               