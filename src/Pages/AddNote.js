import { useState } from 'react';
import { addNoteToServer } from '../redux/actions/notesAction';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import noteStyle from '../Styles/noteStyle';
import Container from '@material-ui/core/Container';
import ColorPicker from '../Components/ColorPicker';
import Title from '../Components/Title';
import Body from '../Components/Body';
import AddIcon from '@material-ui/icons/Add';
import StarsRating from '../Components/StarsRating';
import IconPicker from '../Components/IconPicker';

export default function AddNote() {

    const classes = noteStyle()
    const history = useHistory()

    const [ values, setValues ] = useState({
        id: 0,
        title: '',
        body: '',
        color: '#3f50b5',
        priority: 1,
        icon: 'fas fa-camera fa-2x',
        user: JSON.parse(localStorage.getItem('user')),
    })

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(addNoteToServer(values))
        history.push("/notes")
    }

    const handleChange = (event = null, nameAndValue) => {
        let name = '';
        let value = '';
        if(event !== null){
            event.preventDefault()
            name = event.target.name;
            value = event.target.value;
        }
        else {
            name = nameAndValue[0];
            value = nameAndValue[1]
        }
        setValues({
            ...values,
            [name]: value
        });
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper 
                square
                className={classes.paper} 
                elevation={9}
                style={{borderColor: values.color}}
            >
                <div className={classes.top}>
                    <div className={classes.rating}>
                        <StarsRating 
                            startValue = {values.priority} 
                            readOnly={false}
                            handleChange = {handleChange}
                        />
                    </div>
                    <div >
                        <IconPicker 
                            startValue={values.icon}
                            handleChange={handleChange}
                        />
                    </div>
                </div>
                <form className={classes.form} onSubmit={ handleSubmit }>
                    <Title  
                        handleChange={handleChange} 
                        label='Title' 
                        readOnly={false}
                        style={classes.title}
                        defaultValue={values.title}
                    />
                    <Body 
                        handleChange={handleChange} 
                        label='Body' 
                        readOnly={false}
                        style={classes.body}
                        defaultValue={values.body}
                    />
                    <div className={classes.colorPicker}>
                        <ColorPicker handleChange = {handleChange}/>
                    </div>
                    <div className={classes.buttom}>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            endIcon={<AddIcon />}
                        >
                            Add Note
                        </Button> 
                    </div>
                </form>
            </Paper>
        </Container>
    )
}


/*
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(JSON.stringify(values))
        await fetch(
            'http://localhost:8080/notes/addNote',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            }
        )
        history.push("/notes")
    }
    */