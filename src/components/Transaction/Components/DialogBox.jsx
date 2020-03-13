import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MaterialUIPickers from './DatePicker';
import TextFields from './TextBox';
import './Dialog.css'
import SimpleDialogDemo from './WalletDialog';

export default function MaxWidthDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [fullWidth] = React.useState(true);
    const [maxWidth] = React.useState('md');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const triggerChildAlert = (event) => {
        console.log(event)
    }

    return (
        <React.Fragment>

            <div className="transaction">  <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add Transaction
                        </Button></div>
            <SimpleDialogDemo />
            <Dialog
                maxWidth={maxWidth}
                fullWidth={fullWidth}
                open={open}
                onClose={handleClose}
                aria-labelledby="max-width-dialog-title">

                <DialogTitle id="max-width-dialog-title">Add Transaction</DialogTitle>
                <DialogContent>
                    <MaterialUIPickers />
                    <TextFields triggerChildAlert={triggerChildAlert} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Save</Button>
                    <Button onClick={handleClose} color="primary">Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
