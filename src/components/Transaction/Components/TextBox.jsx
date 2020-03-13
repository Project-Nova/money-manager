import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import './TextBox.css'
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const useStylesReddit = makeStyles(theme => ({
    root: {
        border: '2px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 0,
        backgroundColor: 'white',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    focused: {},
}));

function RedditTextField(props) {
    const classes = useStylesReddit();
    return <TextField InputProps={{ classes, disableUnderline: true }} {...props} />;
}

export default function TextFields(props) {
    const classes = useStyles();

    const handleChange = (e) => {
        let label = e.target.id
        let value = e.target.value
        props.controlFunc({ key: label, value: value })
    }

    return (
        <RedditTextField
            label={props.label}
            className={classes.margin}
            defaultValue={props.value}
            variant="filled"
            id={props.label}
            onChange={handleChange}
        />
    );
}