import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';



import './TransactionHeader.css'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        fontFamily: "Roboto,sans-serif;",
        borderBottom: "1px solid rgba(0,0,0,.12)",
        padding: "0",
    },
}));

export default function TransactionHeader() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem>
                <ListItemAvatar>
                    <span className="day">05</span>
                </ListItemAvatar>
                <ListItemText primary="Thursday" secondary="March, 2020" />
                <ListItemSecondaryAction>
                    <ListItemText primary="-₹ 2,300.00" />
                </ListItemSecondaryAction>
            </ListItem>

        </List>
    );
}
