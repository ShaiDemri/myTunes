import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import TopTenItem from "./TopTenItem";
import Paper from "@material-ui/core/Paper";
import {useSelector} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        position: 'sticky',
        top: 0,
        maxWidth: 100,
        height: 'auto',
        maxHeight: 500,
        overflow: 'auto'
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const TopTenList = props => {
    const classes = useStyles();
    const top10 = useSelector(state => state.media.top10);
    return (
        <>
            {
                top10.length > 0 ?
                    <Paper className={classes.paper}>
                        <Typography variant="h6" className={classes.title}>
                            Top 10
                        </Typography>
                        <List dense={true}>
                            {top10.map(item => <TopTenItem key={item._id} item={item}/>)}
                        </List>
                    </Paper> : <div/>
            }
        </>)
};

export default TopTenList;