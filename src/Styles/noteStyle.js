import { makeStyles } from '@material-ui/core/styles';


const noteStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
        border: "solid 11px",
        borderRadius: '5%',
        backgroundColor: '#ededf5',
    },
    top: {
        display: 'flex',
        width: '100%',
        margin: theme.spacing(3,2,-2,2),
        justifyContent: 'space-around',
    },
    rating: {
        display: 'flex',
        alignSelf: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: theme.spacing(2,2),
        width: '95%',
    },
    title: {
        margin: theme.spacing(3,1,1),
        backgroundColor: 'white'
    },
    body: {
        margin: theme.spacing(2,1),
        backgroundColor: 'white'
    },
    colorPicker: {
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(2),
    },
    buttom: {
        margin: theme.spacing(2,1,1.5),
        display: 'flex',
        justifyContent: 'space-between'
    },
}));

export default noteStyle;