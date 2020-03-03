import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1.5),
        },
    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
    },
}));

export default function LogoAvatar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" src="https://image.flaticon.com/icons/png/512/1413/1413310.png" className={classes.square}></Avatar>
        </div>
    );
}
