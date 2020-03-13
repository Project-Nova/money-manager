import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './ModeTab.css'
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function ModeTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Dec 2019" />
                <Tab label="Jan 2020" />
                <Tab label="Feb 2020" />
                <Tab label="March 2020" />
            </Tabs>
        </Paper>
    );
}