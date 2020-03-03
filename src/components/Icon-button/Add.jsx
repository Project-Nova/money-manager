import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './Add.css'
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function IconButtons() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton color="secondary" aria-label="add an alarm">
                <SearchIcon />
            </IconButton>
        </div>
    );
}