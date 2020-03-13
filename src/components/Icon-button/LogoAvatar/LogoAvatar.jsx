import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import './LogoAvatar.css'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1.5)
        },
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        cursor: "pointer"
    },
}));

export default function LogoAvatar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar variant="rounded" src="https://static.moneylover.me/img/icon/ic_category_all.png" className={classes.square}></Avatar>
            <div className="header-total-div">
                <div className="total">Total</div>
                <div className="price">₹4,644.00</div>
            </div>
        </div>
    );
}
