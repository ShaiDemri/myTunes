import React from 'react'
import {useDispatch} from "react-redux";
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import {fetchMedia, fetchTop10} from '../store/media/actions'
import SearchField from "../containers/media/SearchField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({}));

const SearchTunes = (props) => {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const searchMedia = (query) => dispatch(fetchMedia(query));
    const dispatchFetchTop10 = () => dispatch(fetchTop10());

    return (
        <>
            <Paper className={classes.paper}>
                <Grid container direction={'row'} justify={"flex-start"} alignItems={'center'}>
                    <SearchField searchMedia={searchMedia}/>
                    <Grid item xs={4}>
                        <Button size={'small'} variant="contained" color="primary" className={classes.button}
                                onClick={dispatchFetchTop10}>
                            TOP 10
                        </Button>
                    </Grid>
                </Grid>

            </Paper>
        </>

    )
};

export default SearchTunes;