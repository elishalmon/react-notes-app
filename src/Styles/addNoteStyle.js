import { makeStyles } from '@material-ui/core/styles';


const addNoteStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        border: "solid 15px",
        borderRadius: '5%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: theme.spacing(2,2),
        width: '95%',
    },
    title: {
        margin: theme.spacing(3,1,1)
    },
    body: {
        margin: theme.spacing(2,1),
    },
    colorPicker: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(3,2, 3, 3),
    },
    button: {
        margin: theme.spacing(1,1,2)
    },
}));

export default addNoteStyle;