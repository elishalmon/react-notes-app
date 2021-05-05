import { makeStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      main: {
          display: 'flex',
          justifyContent: 'space-between',
      },
      button: {
          margin: theme.spacing(1,5,1,1)
      },
}));

export default headerStyle;