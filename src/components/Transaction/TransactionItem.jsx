import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
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



    const renderItems = () => {
        const json = [{
            category: "Internet",
            notes: "Internet Bill Paid on Axis Pay",
            price: "-₹ 2,300.00",
            image: "https://img.favpng.com/9/7/21/vector-graphics-clip-art-image-illustration-design-png-favpng-Zd7gD5LJ9ZNGLW9vjDXMGDEPH_t.jpg"
        },
        {
            category: "Gas",
            notes: "Gas Bill Paid on Axis Pay",
            price: "-₹ 4,343.00",
            image: "https://static.moneylover.me/img/icon/icon_139.png"
        }]

        return (json.map(item =>


            <ListItem className="list-item">
                <ListItemAvatar>
                    <Avatar src={item.image}>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.category} secondary={item.notes} />
                <ListItemSecondaryAction>
                    <ListItemText primary={item.price} />
                </ListItemSecondaryAction>
            </ListItem>


        ))
    }

    return (
        <List className={classes.root}>
            {renderItems()}
        </List>
    );
}
