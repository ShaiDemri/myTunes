import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(),
    },
}));
const SearchField = ({searchMedia}) => {
    const classes = useStyles();

    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <>
            <Grid item xs={4}>
                <TextField
                    id="outlined-textarea"
                    label="Search iTunes"
                    placeholder={"Search for iTunes media"}
                    value={term}
                    onChange={event => onInputChange(event)}
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>

            <Grid item xs={2}>
                <Button size={'small'} variant="contained" color="primary" className={classes.button}
                        onClick={() => searchMedia(term)}>
                    search
                </Button>
            </Grid>
        </>
    );
};


export default SearchField;