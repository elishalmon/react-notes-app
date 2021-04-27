import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      main: {
          display: 'flex',
          justifyContent: 'space-between'
    
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      button: {
          margin: theme.spacing(2,5,2,1)
      },
}));

export default headerStyle;