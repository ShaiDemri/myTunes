import React from 'react'
import Button from '@material-ui/core/Button'
import Home from '@material-ui/icons/Home'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    icon: {
        width: 192,
        height: 192,
        color: theme.palette.secondary.main
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    paper: {
        backgroundColor: theme.palette.background.default,
        height: '100vh',
        margin: 0
    },
    button: {
        marginTop: 20
    }
}));

const PageNotFound = (props) => {
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper}>
            <div className={classes.container}>
                <Typography variant="h4">404</Typography>
                <Typography variant="subtitle1">Nothing to see here folks.</Typography>
                <Button variant="fab" color="secondary" aria-label="home" href="/searchTune" className={classes.button}>
                    <Home/>
                </Button>
            </div>
        </Paper>
    )
};

export default PageNotFound