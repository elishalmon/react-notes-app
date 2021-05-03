import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import noteStyle from '../Styles/noteStyle';
import Container from '@material-ui/core/Container';
import ColorPicker from '../Components/ColorPicker';
import Title from '../Components/Title';
import Body from '../Components/Body';
import SaveIcon from '@material-ui/icons/Save';
import StarsRating from '../Components/StarsRating';
import IconPicker from '../Components/IconPicker';
import { useSelector } from 'react-redux';

var isChanged = false;

export default function EditNote() {

    const classes = noteStyle()
    const history = useHistory()
    
    const [ values, setValues ] = useState(JSON.parse(localStorage.getItem('note')))

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(isChanged === true){
            const updatedValues = {...values, read: false}
            await fetch(
            'http://localhost:8080/notes/updateNote',
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedValues),
            }
            )
        }
        localStorage.removeItem('note')
        history.push("/notes")
    }

    const handleChange = (event = null, nameAndValue) => {
        isChanged = true;
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
        console.log(values)
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
                    <div 
                        className={classes.buttom} 
                        style={{display: 'flex', alignSelf: 'center'}}
                    >
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            startIcon={<SaveIcon />}
                        >
                            save changes
                        </Button> 
                    </div>
                </form>
            </Paper>
        </Container>
    )
}

/* const handleColorChange = (color) => {
    isChanged = true
    setValues({
        ...values,
        'color': color.hex
    })
}

const handleRatingChange = (priority) => {
    isChanged = true
    setValues({
        ...values,
        'priority': priority
    })
} 

const handleIconChange = (icon) => {
    setValues({
        ...values,
        'icon': icon
    })
} */

