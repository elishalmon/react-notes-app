import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import addNoteStyle from '../Styles/addNoteStyle';
import Container from '@material-ui/core/Container';
import ColorPicker from './ColorPicker';
import Title from './Title';
import Body from './Body';
import { useLocation } from 'react-router-dom';



export default function Note({ from }) {

    const classes = addNoteStyle()

    const history = useHistory()

    const location = useLocation()
    if(from === "addNote"){
        var { title, body, color, user} = {
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
        }
    }
    else {
        var { id, title, body, color, user} = location.state.note
    }
    
    const [ values, setValues ] = useState({
        id: id,
        title: title,
        body: body,
        color: color,
        user: user,
    })
    
    if (from === 'displayNote'){
        var readOnly=true
        var titleLabel=''
        var bodyLabel=''
    }

    else {
        var readOnly=false
        var titleLabel='Title'
        var bodyLabel='Body'
    }

    var url = 'http://localhost:8080/notes/addNote'
    var method = 'POST'
    const handleSubmit = async (event) => {
        if( from === 'editNote') {
            url = 'http://localhost:8080/notes/updateNote'
            method='PUT'
        }
        event.preventDefault()
        await fetch(
            url,
            {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            }
        )
        history.push("/notes")
    }

    const handleEdit = () => {
        history.push({
            pathname: '/edit-note',
            state: { note: values }
        })
    }

    const handleChange = (event) => {
        event.preventDefault()
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const handleColorChange = (color) => {
        setValues({
            ...values,
            'color': color.hex
        })
    }
    
    return(
        <Container component="main" maxWidth="xs">
            <Paper 
                square
                className={classes.paper} 
                elevation={9}
                style={{borderColor: values.color}}
            >
                <form className={classes.form} onSubmit={ handleSubmit }>
                    <Title  
                        handleChange={handleChange} 
                        label={titleLabel} 
                        readOnly={readOnly} 
                        style={classes.title}
                        defaultValue={values.title}
                    />
                    <Body 
                        handleChange={handleChange} 
                        label={bodyLabel} 
                        readOnly={readOnly} 
                        style={classes.body}
                        defaultValue={values.body}
                    />
                    {
                        from !== "displayNote" &&
                        <div className={classes.colorPicker}>
                            <ColorPicker handleChange = {handleColorChange}/>
                        </div>
                    }
                    
                    {
                        from === 'addNote' &&
                        <div className={classes.button}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Add
                            </Button> 
                        </div>
                    }
                    {
                        from === 'displayNote' &&
                        <div className={classes.button}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick = { handleEdit }
                            >
                                Edit
                            </Button> 
                        </div>
                    }
                    {
                        from === 'editNote' && 
                        <div className={classes.button}>
                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                color="primary"
                                className="submit"
                            >
                                Save Changes
                            </Button> 
                        </div>
                    }
                </form>
            </Paper>
        </Container>
    )
}