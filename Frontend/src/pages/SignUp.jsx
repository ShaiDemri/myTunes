import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch, useSelector} from "react-redux";
import {userLogin, userSignup} from '../store/auth/actions'
import {Link,Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.background.paper,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp(props) {
    const classes = useStyles(props);
    const [isRegistered, setIsRegistered] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [firstName, setFirstName] = React.useState("");
    const [surName, setSurName] = React.useState("");
    const isAuth = useSelector(state => state.auth.user)!== undefined;
    React.useEffect(() => {
        if (isAuth) {
            const location = {
                pathname: '/searchTune',
                state: {from: {pathname: '/signup'}}
            }
            props.history.push(location);
        }
    }, [isAuth]);

    const onEmailChange = event => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const onPasswordChange = event => {
        event.preventDefault();
        setPassword(event.target.value);
    };
    const onFirstNameChange = event => {
        event.preventDefault();
        setFirstName(event.target.value);
    };

    const onSurNameChange = event => {
        event.preventDefault();
        setSurName(event.target.value);
    };

    const dispatch = useDispatch();
    const dispatchSignUp = (email, password, firstName, surName) => {
        if (!email || !password) {
            return;
        }
        dispatch(userSignup(email, password, firstName, surName));
    };
    const dispatchLogin = (email, password) => {
        if (!email || !password) {
            return;
        }
        dispatch(userLogin(email, password));
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {isRegistered ? "Login" : "Sign up"}
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        {isRegistered
                            ? <div/>
                            : (<>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={event => onFirstNameChange(event)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        onChange={event => onSurNameChange(event)}
                                    />
                                </Grid>
                            </>)
                        }
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                onChange={event => onEmailChange(event)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={event => onPasswordChange(event)}
                            />
                        </Grid>
                    </Grid>
                    <Link to={`/searchTune`} replace>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={
                            isRegistered
                                ? () => dispatchLogin(email, password)
                                : () => dispatchSignUp(email, password, firstName, surName)
                        }
                    >
                        {isRegistered ? "Login" : "Sign up"}
                    </Button>
                    </Link>
                    <Grid container justify="flex-end">
                        <Grid item>
                            {isRegistered
                                ? (<a href="#Login" onClick={() => {
                                    setIsRegistered(false)
                                }}>
                                    Don't have an account? Sign up! It's FREE!
                                </a>)
                                : (<a href="#SignUp" onClick={() => {
                                    setIsRegistered(true)
                                }}>
                                    Already have an account? Login
                                </a>)}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
