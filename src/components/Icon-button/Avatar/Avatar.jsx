import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';
import AssignmentIcon from '@material-ui/icons/Assignment';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1.5),
            marginRight: "25px"
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        marginRight: "25px"
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function VariantAvatars() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar variant="square" src="https://avatars2.githubusercontent.com/u/31583525?s=460&v=4" className={classes.square}></Avatar>
        </div>
    );
}
