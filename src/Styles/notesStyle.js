import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';


const notesStyle = makeStyles((theme) => ({
    main: {
        margin: theme.spacing(10, 10),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    item: {
        width: '30%',
        margin: theme.spacing(3, 2),
        border: 'solid 3px',
        borderRadius: '10%',
        display: 'flex'
    },
    button: {
       

    },
    delete: {
       
    },
    title: {
        display: 'flex',
    }
}));

export default notesStyle;