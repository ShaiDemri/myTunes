import React from 'react'
import {useDispatch} from "react-redux";
import {makeStyles} from '@material-ui/core/styles'
// import Paper from '@material-ui/core/Paper'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {fetchMedia, fetchTop10} from '../store/media/actions'
import SearchField from "../containers/media/SearchField";
import MediaList from "../containers/media/MediaList";
import TopTenList from "../containers/media/TopTenList";


const useStyles = makeStyles(theme => ({
    paper: {
        height: "100%",
    },
}));

const SearchTunes = (props) => {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const searchMedia = (query) => dispatch(fetchMedia(query));
    const dispatchFetchTop10 = () => dispatch(fetchTop10());

    return (
        <Grid container direction={'row'} justify={"flex-start"} alignItems={'center'}>
            <SearchField searchMedia={searchMedia}/>
            <Grid item xs={4}/>{/*LAYOUT*/}
            <Grid item xs={2}>
                <Button size={'small'} variant="contained" color="primary" className={classes.button}
                        onClick={dispatchFetchTop10}>
                    TOP 10
                </Button>
            </Grid>
            <Grid container direction={'row'} justify={"center"} alignItems={'flex-start'}>
                <Grid item xs={'auto'} md={10}>
                    <MediaList/>
                </Grid>
                <Grid item xs={'auto'} md={2}>
                    <TopTenList/>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default SearchTunes;