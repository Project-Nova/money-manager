import React, { Component } from 'react'
import './Header.css'
import Button from '@material-ui/core/Button';
import IconButtons from '../Icon-button/Add';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <IconButtons />
                </div>
                <Button variant="contained" color="secondary">
                    Secondary
      </Button>
            </div>
        )
    }
}
