import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';


const notesStyle = makeStyles((theme) => ({
    main: {
        margin: theme.spacing(5, 5, 15),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    item: {
        width: '30%',
        margin: theme.spacing(3, 2),
        border: 'solid 5px',
        borderRadius: '0%',
        display: 'flex',
        backgroundColor: ''
    },
    top: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'space-around'
    },
    buttom: {
        display: 'flex',
        flexDirection: 'column'
    },
    icon: {
        margin: theme.spacing(1.5)
    },
    button: {
        height: '100%',
    },
    label: {
        height: '100%'
    },
    stars: {
        textAlign: 'center'
    }
}));

export default notesStyle;