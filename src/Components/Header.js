import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import headerStyle from '../Styles/headerStyle';
import { useHistory } from 'react-router-dom'; 



export default function Header() {
    
    const classes = headerStyle();

    const history = useHistory()

    const handleAdd = () => {
        history.push({
            pathname: '/add-note',
            state: {
                note: {
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
              }}
        })
    }

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.main}>
                <div>
                    <Button  color="inherit" className = {classes.button} onClick={()=> history.push("/notes")}>
                        <Typography variant="h6" >
                            Home
                        </Typography>
                    </Button>
                    <Button  color="inherit" className = {classes.button} onClick={handleAdd}>
                        <Typography variant="h6" >
                            Add Note
                        </Typography>
                    </Button>
                    <Button  color="inherit" className = {classes.button}>
                        <Typography variant="h6" >
                            About Me
                        </Typography>
                    </Button>
                </div> 
                <Button color="inherit" className={classes.button}>Logout</Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}