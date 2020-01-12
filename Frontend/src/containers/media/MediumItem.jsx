import React from 'react';
import {Link} from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {useDispatch} from "react-redux";
import {selectedTune} from '../../store/media/actions'


const useStyles = makeStyles(theme => ({
    card: {
        minWidth:200,
        maxWidth: 345,
        padding: theme.spacing(1, 2), // '8px 16px'
    },
    media: {
        height: 140,
    },
}));


const MediumItem = ({medium, index}) => {
    const classes = useStyles();

    // console.log("MediumItem", medium);
    const content =()=> <Grid item xs={4} md={4} xl={4}>
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={medium.artworkUrl100}
                    title={medium.collectionName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {medium.trackName}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Grid>;
const dispatch = useDispatch();
const dispatchSelectedTune = (tune)=>dispatch(selectedTune(tune));
    return (
        <Link to={`/tune/${medium.trackId}`} onClick={()=>dispatchSelectedTune(medium)}>
            {index % 5 === 0 ? <Grid container item xs={12} spacing={3} children={content()}/> : content() }
        </Link>
    );
};

export default MediumItem
