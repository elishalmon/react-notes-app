import React, {useState}  from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon  from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useHistory } from 'react-router-dom'; 
import loginStyle from '../Styles/loginStyle';
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

    const [ userNotFound, setUserNotFound ] = useState(false)

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
            setUserNotFound(true)
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
                        {userNotFound 
                        && 
                        <Typography color={'error'} variant='body2' style={{margin: '5px 0 -12px', textAlign: 'center'}}>
                            Email or password is not valid
                        </Typography>}  
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
