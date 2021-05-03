import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'; 
import loginStyle from '../Styles/loginStyle';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';


const loginSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

export default function Login() {

    const classes = loginStyle()
    const history = useHistory();
    //const isLoggedIn = localStorage.getItem('isLoggedIn')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        
        onSubmit: (values) => {
            handleSubmit(values)
        }
    })

    const handleSubmit = async (values) => {
        const response = await fetch(
            'http://localhost:8080/user/getUserLogin',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            }
        )
        if(response.status === 403){
            localStorage.setItem("isLoggedIn", false)
            alert('Email or password is not valid, please try again', null, 2)
            history.push('/login')
        }
        else {
            const user = await response.json();
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("user", JSON.stringify(user))
            history.push('/notes')
        }
    }

    return(
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    {/*
                        localStorage.getItem('isLoggedIn') === false &&
                        <Typography 
                            align='center'
                            variant="body1" color="textSecondary" 
                            align="center"
                        >
                            Email or password are not valid
                        </Typography>
                    */}
                    <form className={classes.form} onSubmit={ formik.handleSubmit }>
                        <TextField
                            className="email-text-field"
                            value={ formik.values.email }
                            onChange={ formik.handleChange }
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="email"
                            label="Email Adress"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button> 
                    </form>
            </div>
        </Container>
    )
}


/*
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'; 
import loginStyle from '../Styles/loginStyle';


export default function Login() {

    const classes = loginStyle()

    const [ values, setValues ] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const handleChange = ( event ) => {
        event.preventDefault()
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push("/notes")
    }

    return(
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                <form className={classes.form} onSubmit={ handleSubmit }>
                    <TextField
                        className="email-text-field"
                        onChange={ handleChange }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Adress"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        onChange={ handleChange }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button> 
                </form>
            </div>
        </Container>
    )
}
*/