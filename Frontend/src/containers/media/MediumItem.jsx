import React from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const VideoListItem = ({medium}) => {
    return (
        <ListItem divider>
            <ListItemText
                primary={"medium.snippet.title"}
            />
        </ListItem>
    );
};


export default VideoListItem;