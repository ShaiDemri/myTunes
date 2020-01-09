import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch} from "react-redux";
import {userLogin, userSignup} from '../store/auth/actions'

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

// const validateEmail=(e)=>{
//     return /\S+@\S+\.\S+/.test(e);
// };
export default function SignUp(props) {
    const classes = useStyles(props);
    const [isRegistered, setIsRegistered] = React.useState(false);
    const dispatch = useDispatch();
    const dispatchSignUp = () => dispatch(userSignup());
    const dispatchLogin = () => dispatch(userLogin());

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    {isRegistered ?"Login":"Sign up"}
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
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={isRegistered ? ()=>dispatchLogin():()=>dispatchSignUp()}
                    >
                        {isRegistered ?"Login":"Sign up"}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            {isRegistered
                                ? (<Link href="#" variant="body2" onClick={() => {
                                    setIsRegistered(false)
                                }}>
                                    Don't have an account? Sign up! It's FREE!
                                </Link>)
                                : (<Link href="#" variant="body2" onClick={() => {
                                    setIsRegistered(true)
                                }}>
                                    Already have an account? Login
                                </Link>)}
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
