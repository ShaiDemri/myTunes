import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({}));

const Tune = (props) => {
    const classes = useStyles(props);
    return (
        <Paper className={classes.paper}>
            <div>Tune</div>
        </Paper>
    )
};

export default Tune;