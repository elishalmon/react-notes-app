import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import Paper from '@material-ui/core/Paper';
import noteStyle from '../Styles/noteStyle';
import Container from '@material-ui/core/Container';
import Title from '../Components/Title';
import Body from '../Components/Body';
import EditIcon from '@material-ui/icons/Edit';
import StarsRating from '../Components/StarsRating';

export default function ViewNote() {

    const classes = noteStyle()
    const history = useHistory()
    const { id, title, body, color, priority, icon } = JSON.parse(localStorage.getItem('note'))

    return(
        <Container component="main" maxWidth="xs">
            <Paper 
                square
                className={classes.paper} 
                elevation={9}
                style={{borderColor: color}}
            >
                <div className={classes.top}>
                    <div className={classes.rating}>
                        <StarsRating 
                            startValue = {priority} 
                            readOnly={true}
                        />
                    </div>
                    <div >
                    <i class={icon}></i>
                    </div>
                </div>
                <form className={classes.form} >
                    <Title  
                        label='' 
                        readOnly={true}
                        style={classes.title}
                        defaultValue={title}
                    />
                    <Body 
                        label='' 
                        readOnly={true}
                        style={classes.body}
                        defaultValue={body}
                    />
                    <div className={classes.button} style={{display: 'flex', alignSelf: 'flex-end'}}>
                        <Button
                            onClick={()=> history.push(`/notes/edit-note/${id}`)}
                            color="primary"
                            variant=""
                            className="submit"
                            startIcon={<EditIcon />}
                        >
                        </Button> 
                    </div>
                </form>
            </Paper>
        </Container>
    )
}