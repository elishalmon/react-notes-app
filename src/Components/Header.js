import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import headerStyle from '../Styles/headerStyle';
import { useHistory, Redirect } from 'react-router-dom'; 


export default function Header() {
    
    const classes = headerStyle();

    const history = useHistory()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.main}>
                <div>
                    <Button color="inherit" className = {classes.button} onClick={()=> history.push("/notes")}>
                        <Typography variant="h6" >
                            Home
                        </Typography>
                    </Button>
                    <Button color="inherit" className = {classes.button} onClick={()=> history.push("/notes/add-note")}>
                        <Typography variant="h6" >
                            Add Note
                        </Typography>
                    </Button>
                    <Button color="inherit" className = {classes.button}>
                        <Typography variant="h6" >
                            About
                        </Typography>
                    </Button>
                </div> 
                <Button 
                    color="inherit" 
                    className={classes.button}
                    onClick={()=> history.push('/logout')}
                    //onClick = {()=> <Redirect to='/logout' />}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}