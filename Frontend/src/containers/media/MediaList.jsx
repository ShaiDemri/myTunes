import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MediumItem from './MediumItem'
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


const MediaList = ({media}) => {
    const classes = useStyles();


    return (
        <Grid item xs={6} md={3}>
            <Typography variant="h6" className={classes.title}>
                Media
            </Typography>
            <Paper className={classes.demo} style={{height:250,maxHeight: 250, overflow: 'auto'}}>
                <List dense={true}>
                    {media.map(medium => <MediumItem key={medium.etag} medium={medium} />,
                    )}
                </List>
            </Paper>
        </Grid>
    );
};

export default MediaList;