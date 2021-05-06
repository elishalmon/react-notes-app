import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import headerStyle from '../Styles/headerStyle';
import { useHistory } from 'react-router-dom'; 
import Box from '@material-ui/core/Box';


export default function Header() {
    
    const classes = headerStyle();

    const history = useHistory()

    return (
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.main}>
                <div>
                    <Button color="inherit" className = {classes.button} onClick={()=> history.push("/notes")}>
                        <Typography variant="h5" >
                            <Box fontWeight={600}>
                                Home
                            </Box>
                        </Typography>
                    </Button>
                    <Button color="inherit" className = {classes.button} onClick={()=> history.push("/notes/add-note")}>
                        <Typography variant="h5" >
                            <Box fontWeight={600}>
                                Add Note
                            </Box>
                        </Typography>
                    </Button>
                    <Button color="inherit" className = {classes.button}>
                        <Typography variant="h5">
                            <Box fontWeight={600}>
                                About
                            </Box>
                        </Typography>
                    </Button>
                </div> 
                <Button 
                    color="inherit" 
                    className={classes.button}
                    onClick={()=> history.push('/logout')}
                >
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
        </div>
    );
}