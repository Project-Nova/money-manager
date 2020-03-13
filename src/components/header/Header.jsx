import React, { Component } from 'react'
import './Header.css'
import IconButtons from '../Icon-button/Add/Add';
import VariantAvatars from '../Icon-button/Avatar/Avatar';
import LogoAvatar from '../Icon-button/LogoAvatar/LogoAvatar';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <div className="flex">
                        <LogoAvatar />
                    </div>
                    <div className="flex flex-end">
                        <VariantAvatars />
                    </div>
                </div>
            </div>
        )
    }
}
