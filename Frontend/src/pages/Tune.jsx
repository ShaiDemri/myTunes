import React from "react";
import {connect, useSelector} from "react-redux";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import CardMedia from '@material-ui/core/CardMedia';

import {AudioPlayer} from "mui-audio-player";
import ReactPlayer from "react-player";


const Tune = props => {

    const tune = useSelector(state => state.media.selectedTune);

    const {
        artistName,
        trackName,
        primaryGenreName,
        artworkUrl100,
        collectionName,
        previewUrl,
        kind,
    } = tune;

    const isSong = kind === "song";

    const useStyles = makeStyles(theme => ({
        card: {
            display: 'flex',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        cover: {
            width: '-webkit-fill-available',
        },
        button:{
            width:'-webkit-fill-available'

        }
    }));

    const classes = useStyles();
    const backHome = () => {
        props.history.goBack();
    };

    return (
        <>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {trackName} / {collectionName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {artistName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Genre: {primaryGenreName}
                        </Typography>
                    </CardContent>
                    {isSong ? (
                        <AudioPlayer src={previewUrl} autoPlay={false} elevation={1}/>
                    ) : (
                        <ReactPlayer
                            url={previewUrl}
                            playing={false}
                            controls={true}
                        />
                    )}
                </div>

                <CardMedia
                    className={classes.cover}
                    image={artworkUrl100}
                    title={trackName}
                />
            </Card>
            <Fab
                variant="extended"
                color="secondary"
                className={classes.button}
                onClick={() => backHome()}
            >
                Back To Search
            </Fab>


        </>
    );
};

export default Tune;