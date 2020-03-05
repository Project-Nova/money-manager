import React, { Component } from 'react'
import './Header.css'
import IconButtons from '../Icon-button/Add/Add';
import VariantAvatars from '../Icon-button/Avatar/Avatar';
import LogoAvatar from '../Icon-button/LogoAvatar/LogoAvatar';
import Button from '@material-ui/core/Button';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="flex">
                        <LogoAvatar />
                    </div>
                    <div className="flex flex-end">
                        <div className="transaction">  <Button variant="contained" color="primary">
                            Add Transaction
                        </Button></div>

                        <IconButtons />
                        <VariantAvatars />
                    </div>
                </div>
            </div>
        )
    }
}
