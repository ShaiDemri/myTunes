import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediumItem from './MediumItem'
import Paper from "@material-ui/core/Paper";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const MediaList = () => {
    const classes = useStyles();
    const media = useSelector(state => state.media.media);

    return (
        <Grid container direction={'row'} className={classes.demo}>
            <Grid item xs={12} md={12} xl={12}>
                <Typography variant="h6" className={classes.title}>
                    Media
                </Typography>
            </Grid>
            <Grid container item xs={8} md={8} xl={8}>
                {media.map((medium, index) => <MediumItem key={medium.trackId} medium={medium} index={index}/>,
                )}
            </Grid>
        </Grid>
    );
};

export default MediaList;