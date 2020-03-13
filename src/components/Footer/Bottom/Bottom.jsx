import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListIcon from '@material-ui/icons/List';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const useStyles = makeStyles({
    root: {
        width: 500,
    },

});

export default function Botttom() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} showLabels className={classes.root}>
            <Link to="/about" label="New" value="add"><BottomNavigationAction label="New" value="add" icon={<NoteAddOutlinedIcon />} /></Link>
            <Link to="/" > <BottomNavigationAction label="Trans.." value="trans" icon={<ListIcon />} /></Link>
            <BottomNavigationAction label="Stats" value="stats" icon={<EqualizerIcon />} />
            <BottomNavigationAction label="Accounts" value="accounts" icon={<AccountBalanceIcon />} />
            <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
        </BottomNavigation >
    );
}