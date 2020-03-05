import React, { Component } from 'react'
import './Footer.css'
import IconButtons from '../Icon-button/Add/Add';
import VariantAvatars from '../Icon-button/Avatar/Avatar';
import LogoAvatar from '../Icon-button/LogoAvatar/LogoAvatar';
import Botttom from './Bottom/Bottom';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <Botttom />
                </div>
            </div>
        )
    }
}
