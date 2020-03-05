import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListIcon from '@material-ui/icons/List';
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
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Transactions" value="recents" icon={<ListIcon />} />
            <BottomNavigationAction label="Stats" value="favorites" icon={<EqualizerIcon />} />
            <BottomNavigationAction label="Accounts" value="nearby" icon={<AccountBalanceIcon />} />
            <BottomNavigationAction label="Settings" value="folder" icon={<SettingsIcon />} />
        </BottomNavigation>
    );
}