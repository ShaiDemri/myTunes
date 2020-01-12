import React from 'react'
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const TopTenItem = item => {
    return (
        <ListItem divider>
            <ListItemText
                primary={item.item.query}
            />
        </ListItem>
    )
};

export default TopTenItem;