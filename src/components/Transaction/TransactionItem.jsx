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

import './TransactionItem.css'

import './TransactionItem.css'
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        fontFamily: "Roboto,sans-serif;"
    },
}));

export default function TransactionItem() {
    const classes = useStyles();

    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List className={classes.root}>
            <ListItem className="list-item">
                <ListItemAvatar>
                    <Avatar src="https://img.favpng.com/9/7/21/vector-graphics-clip-art-image-illustration-design-png-favpng-Zd7gD5LJ9ZNGLW9vjDXMGDEPH_t.jpg">
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Adjust Balance" />
                <ListItemSecondaryAction>
                    <ListItemText primary="-₹ 2,300.00" />
                </ListItemSecondaryAction>
            </ListItem>
        </List>
    );
}
