import React from 'react'
import {useDispatch} from "react-redux";
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import {userLogout} from '../store/auth/actions'
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import ButtonAppBar from "../containers/AppBar";

const useStyles = makeStyles(theme => ({}));

const SearchTunes = (props) => {
    const classes = useStyles(props);
    const dispatch = useDispatch();

    return (
        <>
            <ButtonAppBar/>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="Search Tune"
                            label="Search"
                            type="input"
                            id="Search"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => dispatch()}>Submit</Button>
                    </Grid>
                </Grid>
            </Paper>
        </>

    )
};

export default SearchTunes;