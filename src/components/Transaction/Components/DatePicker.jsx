import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import "./DatePicker.css";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: "6px 0 4px 12px;",
            width: 200,
            fontSize: "20px",
            fontWeight: "bold"
        }
    }
}));

export default function MaterialUIPickers(props) {

    const classes = useStyles();

    const handleChange = (date) => {
        props.controlFunc({ key: "Date", value: date })
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
                InputProps={{ classes, disableUnderline: true }}
                margin="normal"
                id={props.label}
                label="Time picker"
                format="yyyy/MM/dd"
                value={props.date}
                onChange={handleChange}
                KeyboardButtonProps={{ "aria-label": "change time" }}
            />
        </MuiPickersUtilsProvider>
    );
}
